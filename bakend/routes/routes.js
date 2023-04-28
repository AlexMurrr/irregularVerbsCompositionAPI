import express from "express";
import {createuser, showUsers} from "../controllers/point.js";
import {getUser} from "../controllers/user.js";

const router = express.Router();

router.get("/addUser", createuser);
router.get("/allUsers", showUsers)
router.get("/user", getUser);

export default router;
