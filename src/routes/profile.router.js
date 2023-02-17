const profile = require('express').Router()
const {getProfileId, updateProfile} = require ('../controller/profile.controller')

profile.get('/', getProfileId)
profile.patch('/update', updateProfile)


module.exports = profile
