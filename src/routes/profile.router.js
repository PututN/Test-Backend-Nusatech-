const profile = require('express').Router()
const {getProfileId, updateProfile} = require ('../controller/profile.controller')

profile.get('/', getProfileId)
profile.post('/update', updateProfile)


module.exports = profile
