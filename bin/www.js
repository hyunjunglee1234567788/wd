"use strcit";

const app = require("../app");

const PORT = process.env.PORT;

// server 
app.listen(PORT,()=>{
    console.log("server start");
});