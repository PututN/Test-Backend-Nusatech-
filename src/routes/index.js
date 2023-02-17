const routes = require('express').Router()

routes.use('/user', require('./user.router'))
routes.use('/topUp', require('./walletBalance.router'))
routes.use('/profile', require('./profile.router')) 

module.exports = routes