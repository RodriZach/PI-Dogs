const { Router } = require("express");
const { getAllDogs, getDogById, postDog, rodrifunction } = require("../controllers/dogController");
const server = Router();


server.get("/", getAllDogs);
server.get("/:rodri", rodrifunction);
server.get("/:id", getDogById);
server.post("/", postDog);

module.exports = server