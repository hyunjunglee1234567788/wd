"use strcit";

const express = require("express");
const bodyparser =require ("body-parser");
const app = express();
// router 
const home = require("./src/routes/home");
//PORT 
const PORT = 3000;

// app setting (contect ejs)
app.set("views",("./src/views"));
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// middle wear 
app.use("/",home);

module.exports=app;