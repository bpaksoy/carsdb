const env = "development";
const config = require("./knexfile.js")[env];
const knex = require("knex")(config);
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const cars = require("./routes/cars");
app.use(cars);

app.listen(3000, function(){
  console.log("Listening on 3000...");
})
