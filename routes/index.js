const express = require("express");
const path = require("path")
const route = require("../routes/index");
const routes = express.Router();
const maincontroller = require("../controller/mainController");

routes.use("/", express.static(path.join(__dirname, "/public")));

routes.get("/", maincontroller.index);

module.exports = routes;
