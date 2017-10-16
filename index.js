const env = "development";
const config = require("./knexfile.js")[env];
const knex = require("knex")(config);


const express = require("express");
const app = express();

const cars = require("./routes/cars");
app.use(cars);

app.listen(3000, function(){
  console.log("Listening on 3000...");
})
