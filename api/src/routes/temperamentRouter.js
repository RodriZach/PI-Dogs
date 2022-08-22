const { Router } = require("express");
const getApiTemp  = require("../controllers/tempController");
const server = Router();

server.get("/", getApiTemp);

module.exports = server