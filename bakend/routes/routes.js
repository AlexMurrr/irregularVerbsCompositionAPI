import express from "express";
import {createuser, showUsers} from "../controllers/point.js";

const router = express.Router();

router.get("/addUser", createuser);
router.get("/allUsers", showUsers)

export default router;
