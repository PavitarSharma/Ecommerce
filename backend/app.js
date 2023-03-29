import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
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

export default app;
