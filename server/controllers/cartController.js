const Store = require('../models/storeModel.js')
const ShoppingCarts = require('../models/shoppingCartModel.js')
const cartController = {};

cartController.addProduct = async (req, res, next) => {
    console.log('entered addProduct middleware')
   let {_id, item, price } = req.body
    price = Number(price.slice(1))
    console.log(typeof price, price)
   
    try{
    res.locals.shoppingCartItems=  await ShoppingCarts.findOneAndUpdate({_id,_id}, {$push: {"items": item}, $inc: {total_price: price, total_quantity: 1}}, {new:true})
    console.log(res.locals.shoppingCartItems)
    return next()
        
      }
    catch(err){
      console.log(err)
      return next({
        log: `storeController.getProducts: ERROR: ${err}`,
        message: {err: `Error occurred in storeController.getProducts ${err.error}`}
      });
    };
  };
  
  
  module.exports = cartController;