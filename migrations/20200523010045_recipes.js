
exports.up = function (knex) {
    return knex.schema
        .createTable('instructions', tbl => {
            tbl.increments('id');
            tbl
                .string('step', 255)
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments('id');
            tbl
                .string('name', 255)
                .notNullable();
            tbl
                .float('quantity')
                .notNullable();
        })

        .createTable('recipes', tbl => {
            tbl.increments();
            tbl
                .string('name', 255)
                .notNullable();
            tbl
                .integer('step_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('instructions')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        // .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')

};
