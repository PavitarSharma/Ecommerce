import express from "express";
import { createUser } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/create-user").post(upload.single("file"), createUser);

export default router;
