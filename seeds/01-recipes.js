
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'not really a food', step_id: 1, ingredient_id: 2 },
        { name: 'Dolma', step_id: 2, ingredient_id: 1 },
        { name: 'Bryani', step_id: 2, ingredient_id: 1 },
      ]);
    });
};