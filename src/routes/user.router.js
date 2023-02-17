const user = require('express').Router()
const {register, login} = require ('../controller/user.controller')

user.post('/signUp', register)
user.post('/signIn', login)



module.exports = user