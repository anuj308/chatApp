import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserForSideBar,getMessages,sendMessage } from "../controllers/message.controller.js";

const router = Router();

router.get("/users",protectRoute,getUserForSideBar);
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;