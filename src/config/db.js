"use strict"

const mysql = require("mysql");

const db = mysql.createConnection({
    hots:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PSWORD,
    database:process.env.DB_DATABASE,
});

db.connect();

module.exports=db;