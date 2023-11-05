const express = require("express");
const { CreateActor, GetAllActors } = require("./actor.controllers");
const actorrouter = express.Router();

actorrouter.post("/actor", CreateActor);
actorrouter.get("/", GetAllActors);

module.exports = actorrouter;
