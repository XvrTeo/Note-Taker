// Required dependencies

const express = require("express");
const fs = require("fs");
const path = require('path');

// Express app

const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Required routes

require('./routes/routes')(app);

app.listen(PORT, function () {
    console.log("App is listening", PORT);
});
