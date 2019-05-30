const express = require('express')
const nunjucks = require('nunjucks')

class App {
  constructor () {
    this.express = express()
    this.middleware()
    this.router()
  }

  middleware () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    nunjucks.configure('src/views', {
      autoescape: true,
      express: this.express,
      watch: true
    })
    this.express.set('view engine', 'njk')
  }

  router () {
    this.express.use(require('./router'))
  }
}

module.exports = new App().express
