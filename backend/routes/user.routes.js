import express from "express";
import { activateUser, createUser, getUser, loginUser, logoutUser } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/create-user").post(upload.single("file"), createUser);

router.route("/activation").post(activateUser)

router.route("/login").post(loginUser)

router.route("/:id").post(getUser)

router.route("/logout").post(logoutUser)

export default router;
