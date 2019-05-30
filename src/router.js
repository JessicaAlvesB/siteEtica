const express = require('express')

const routes = express.Router()
routes.get('/', (req, res) => {
  res.render('index')
})
routes.get('/fraudes', (req, res) => {
  res.render('fraude')
})

routes.get('/crimes', (req, res) => {
  res.render('crimes')
})

module.exports = routes
