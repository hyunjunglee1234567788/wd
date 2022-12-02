"use strcit";

const express = require("express");
const bodyparser =require ("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();
// router 
const home = require("./src/routes/home");
//PORT 
const PORT = 3000;

const logger = require("./src/config/logger");
logger.log("info","hi");


// app setting (contect ejs)
app.set("views",("./src/views"));
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("dev"));
// middle wear 
app.use("/",home);

module.exports=app;