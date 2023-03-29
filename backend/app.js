import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet"
import userRoutes from "./routes/user.routes.js"
import errorHandler from "./middlewares/error.js";

const app = express();

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());


app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Server has established on it's server",
  });
});

app.use("/api/v2/user", userRoutes)

app.use(errorHandler);

export default app;
