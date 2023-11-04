const express = require("express");
const { CreateActor } = require("./actor.controllers");
const router = express.Router();

router.post("/", CreateActor);
router.get("/", GetAllActors);
