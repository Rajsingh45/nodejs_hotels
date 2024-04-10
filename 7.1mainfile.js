const express = require('express')
const app= express();
const db = require('./db');

app.get('/',function(req,res){
    res.send("Welcome to my hotel , How can i Help You?")
})

app.listen(4000,()=>{
    console.log("Listening on port 2000");
})