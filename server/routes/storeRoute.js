const express = require('express');
const storeController = require('../controllers/storeController')
const cartController = require('../controllers/cartController')
const router = express.Router();


router.get('/',storeController.getProducts,(req,res)=> {
    return res.status(200).json(res.locals.products)
})

router.post('/get', cartController.getItems,(req,res)=> {
    return res.status(200).json(res.locals.items)
})

router.post('/add',cartController.addProduct,(req,res)=> {
    return res.status(201).json(res.locals.shoppingCartItems)
})

router.post('/delete',cartController.deleteProduct,(req,res)=> {
    return res.status(200).json(res.locals.shoppingCartItems)
})

router.post('/clear', cartController.clearCart,(req,res) => {
    return res.status(200).json(res.locals.shoppingCartItems)})

router.post('/checkout', cartController.checkOut, cartController.clearCart, (req,res) => {
    return res.status(200).json('success')})

router.post('/orders', storeController.orderHistory, (req,res)=> {
    return res.status(200).json(res.locals.orders)
})

module.exports = router