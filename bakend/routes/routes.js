import express from "express";
import {createuser} from "../controllers/point";

const router = express.Router();

router.get("/addUser", createuser);

export default router;
