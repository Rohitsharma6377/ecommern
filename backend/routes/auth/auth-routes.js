const express = require('express')
const router =express.Router();

const {registerUser} = require('../../controlers/auth/auth-controlers')

router.post('/register' , registerUser)



module.exports= router;