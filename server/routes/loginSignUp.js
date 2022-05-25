const express = require('express');
const signUpController = require('../controllers/signUpController')
const router = express.Router();


router.post('/', signUpController.createUser, (req,res) => {
    return res.status(201).json({user_id: res.locals.user_id, username: res.locals.username, cart_id: res.locals.cart_id })
})

router.post('/login', signUpController.verifyUser, (req, res) => {
    return res.status(201).json({user_id: res.locals.user_id, username: res.locals.username, cart_id: res.locals.cart_id });
})

module.exports = router