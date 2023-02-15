import express from "express";
import {createuser} from "../controllers/point.js";

const router = express.Router();

router.get("/addUser", createuser);

export default router;
