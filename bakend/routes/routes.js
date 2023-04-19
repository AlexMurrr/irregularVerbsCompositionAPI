import express from "express";
import {createuser, showUsers} from "../controllers/point.js";
import {getVerbs} from "../controllers/verbs.js";

const router = express.Router();

router.get("/addUser", createuser);
router.get("/allUsers", showUsers)
router.get("/allVers", getVerbs);

export default router;
