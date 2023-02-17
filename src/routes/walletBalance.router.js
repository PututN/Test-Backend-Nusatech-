const walletBalance = require('express').Router()
const topUp = require ('../controller/walletBalance.controller')

walletBalance.post('/', topUp)


module.exports = walletBalance
