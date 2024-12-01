import { Router } from "express";
import { createUser,loginUser,logoutUser } from "../Controllers/userControllers.js"

const router = Router();

router.route("/sign").post(createUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)

export default router