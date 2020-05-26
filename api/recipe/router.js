const express = require('express');

const router = express.Router()

const Recipes = require('./model')


router.get('/recipes', (req, res) => {
    console.log('kkk')
    Recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({ err: error })
        })
})

router.get('/recipes/:id/shoppingList', (req, res) => {
    const id = req.params.id

    Recipes
        .getShoppingList(id)
        .then(ingredient => {
            res.status(200).json(ingredient)
        })
        .catch(error => {
            res.status(500).json({ err: error })
        })
})

router.get('/recipes/:id/instructions', (req, res) => {
    const id = req.params.id
    Recipes
        .getInstructions(id)
        .then(insturction => {
            res.status(200).json(insturction)
        })
        .catch(error => {
            res.status(500).json({ err: error })
        })
})


module.exports = router;