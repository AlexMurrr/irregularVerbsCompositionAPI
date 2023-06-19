import express from "express";
import { createuser, showUsers } from "../controllers/point.js";
import { getUser } from "../controllers/user.js";
import { getVerbs, randVerb } from "../controllers/getVerbs.js";

const router = express.Router();

router.get("/addUser", createuser);
router.get("/allUsers", showUsers);
router.get("/user", getUser);
router.get("/verbs", getVerbs);
router.get("/randverb", randVerb);

export default router;
