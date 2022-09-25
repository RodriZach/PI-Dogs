const { Router } = require("express");
const checkoutControllers = require("../controllers/checkoutControllers");
const { getAllDogs, getDogById, postDog, rodrifunction } = require("../controllers/dogController");
const server = Router();




server.get("/", getAllDogs);
//server.get("/:rodri", rodrifunction);
server.get("/:id", getDogById);
server.post("/", postDog);

server.post("/pay",checkoutControllers.pago);


module.exports = server