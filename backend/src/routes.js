const express = require('express')
const routes = express()

const {hello} = require('./controllers/init')

routes.get('/', hello)

module.exports = routes