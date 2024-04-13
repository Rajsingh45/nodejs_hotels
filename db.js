const mongoose = require('mongoose')
require('dotenv').config();


//define mongodb connection url
const mongoURL= process.env.MONGODB_URL_LOCAL 
// const mongoURL= process.env.MONGODB_URL;

//setup mongoose connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
// mongoose.connect('mongodb://localhost:27017/hotels');

//mongoose maintains a default connection object representing the mongodb connection
const db= mongoose.connection;

//Event listener
db.on('connected', ()=>{
    console.log("Connected to MongoDB Server");
});

db.on('error', (err)=>{
    console.log("MongoDB Connection Error", err);
});

db.on('disconnected', ()=>{
    console.log("MongoDB Disconnected");
});

//export the database connection
module.exports=db;