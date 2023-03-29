import app from "./app.js";
import connectDatabase from "./db/database.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))



// Handling uncaught Exception
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: path.join(__dirname, "../.env") });
}

connectDatabase()

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
