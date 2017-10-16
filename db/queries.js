const knex = require("./knex");

module.exports = {
  cars: {
    getAll: function() {
      return knex("car");
    },
    getOne: function(id){
      return knex("car")
      .where("id", id);
    },
    create: function(car){
      return knex("car")
      .insert(car)
      .returning("*");
    }
  }
}
