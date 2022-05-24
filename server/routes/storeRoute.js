const express = require('express');
const storeController = require('../controllers/storeController')
const router = express.Router();


router.get('/',storeController.getProducts,(req,res)=> {
    return res.status(200).json(res.locals.products)
})



module.exports = router