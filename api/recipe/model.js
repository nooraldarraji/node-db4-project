const db = require('../../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


function getRecipes() {
    return db('*').from('recipes')
}


function getShoppingList(id) {
    return db()
        .select('r.name as Recipe', 'i.name as Ingredient', 'i.quantity as Quantity')
        .from('ingredients as i')
        .join('Recipes as r', 'r.ingredient_id', '=', 'i.id')
        .where('r.id', '=', id)
}

function getInstructions(id) {
    return db()
        .select('r.name as Recipe', 'i.step as Instruction')
        .from('instructions as i')
        .join('Recipes as r', 'r.step_id', '=', 'i.id')
        .where('r.id', '=', id)
}