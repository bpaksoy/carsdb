const express = require("express");
const router = express.Router();
module.exports = router;

const queries = require("../db/queries");

router.get("/cars", function(req,res){
  queries.cars.getAll()
  .then(function(data){
      res.json(data);
  });
});


router.get("/cars/:id", function(req,res){
  queries.cars.getOne(req.params.id)
  .then(function(data){
    res.json(data);
  });
});
