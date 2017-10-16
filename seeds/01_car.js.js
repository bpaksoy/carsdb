
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function() {
      // Inserts seed entries
      return knex('car').insert([
        {
          make: 'Toyota',
          model: 'Highlander',
          year: 2018
        },
        {
          make: 'Audi',
          model: 'Q5',
          year: 2014
        },
        {
          make: 'BMW',
          model: 'X10',
          year: 2015
        }
      ]);
    });
};
