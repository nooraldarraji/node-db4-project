-- getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe

SELECT r.name as RecipeName, i.name as IngredientName, i.quantity as IngredientQuantity
FROM [ingredients] AS i
JOIN [Recipes] as r
ON i.id = r.ingredient_id
WHERE r.id = 1

-- getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

SELECT r.name as RecipeName, i.step as Instruction
FROM [instructions] AS i
JOIN [Recipes] as r
ON i.id = r.step_id
WHERE r.id = '1'