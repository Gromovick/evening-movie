import express from "express";
import { UserController } from "../controllers/UserController.js";

const router = express.Router();

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);
router.post("/auth/logout", UserController.logout);
router.get("/auth/authentication", UserController.authentication);

router.get("/auth/activation/:code", UserController.activation);

export default router;
