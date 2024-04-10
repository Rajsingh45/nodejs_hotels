const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const Person = require('./8models/Person'); // Assuming Person model is in the same directory
const MenuItem= require('./8models/MenuItem');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON bodies
const PORT= proceess.env.PORT || 5000;

app.get('/', function(req, res) {
  res.send("Welcome to my hotel. How can I help you?");
});

const personRoutes=require("./routes/personRoutes");
const menuItemRoutes= require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

// Start the server on port 5000
app.listen(PORT, () => {
  console.log("Listening on port 5000");
});
