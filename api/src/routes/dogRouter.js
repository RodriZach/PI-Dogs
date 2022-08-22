const { Router } = require("express");
const { getAllDogs, getDogById, postDog } = require("../controllers/dogController");
const server = Router();


server.get("/", getAllDogs);
server.get("/:id", getDogById);
server.post("/", postDog);

module.exports = server