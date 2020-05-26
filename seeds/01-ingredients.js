
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Corn oil', quantity: 15.5 },
        { name: 'Dajaj', quantity: 20.5 },
        { name: 'Hummos', quantity: 3.5 }
      ]);
    });
};
