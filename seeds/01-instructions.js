
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { step: 'mix is until you get something out of it, please bro!' },
        { step: 'Just leave it bro ;)' },
        { step: 'sometimes thing dont go on your way!' }
      ]);
    });
};