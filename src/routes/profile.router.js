const profile = require('express').Router()
const getProfileId = require ('../controller/profile.controller')

profile.get('/', getProfileId)


module.exports = profile
