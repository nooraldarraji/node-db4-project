const express = require('express');

const server = express();

const recipes = require('./api/recipe/router')

server.use(express.json())

server.use('/api/', recipes)



module.exports = server;