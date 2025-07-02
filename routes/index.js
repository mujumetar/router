const express = require("express");
const routes = express.Router();
const path = require("path")
const adminTbl = require("../models/adminTbl")
// const route = require("../routes/index");
const maincontroller = require("../controller/mainController");
routes.use(express.urlencoded())


routes.get("/", maincontroller.index);
routes.post("/insertData", maincontroller.insertData);
routes.get("/404", maincontroller.error)
// routes.get("/footer", maincontroller.footer)

module.exports = routes;
