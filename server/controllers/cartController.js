const Store = require('../models/storeModel.js')
const ShoppingCarts = require('../models/shoppingCartModel.js');
const cartController = {};


cartController.getItems = async (req, res, next) => {
  console.log('entered getItems middleware')
  const {_id } = req.body
  try{
  res.locals.items=  await ShoppingCarts.findOne({_id})
  console.log(res.locals.items)
  return next()
      
    }
  catch(err){
    console.log(err)
    return next({
      log: `cartController.getItems: ERROR: ${err}`,
      message: {err: `Error occurred in cartController.getItems ${err.error}`}
    });
  };
};

cartController.addProduct = async (req, res, next) => {
    console.log('entered addProduct middleware')
   let {_id, type, price, image } = req.body
console.log(typeof price, price);
   if(typeof price === 'string'){
    price = Number(price.slice(1))
   }
   
    try{
    res.locals.shoppingCartItems=  await ShoppingCarts.findOneAndUpdate({_id,_id}, {$push: {"items": {product: type, price: price, image: image }}, $inc: {total_price: price, total_quantity: 1}}, {new:true})
    console.log(res.locals.shoppingCartItems)
    return next()  
      }
    catch(err){
      console.log(err)
      return next({
        log: `cartController.addProduct: ERROR: ${err}`,
        message: {err: `Error occurred in cartController.getProduct ${err.error}`}
      });
    };
  };

  cartController.deleteProduct = async (req,res,next) => {
    console.log('entered addProduct middleware')
    let {_id, type, price } = req.body
 
    if(typeof price === 'string'){
     price = Number(price.slice(1))
    }
    price = price * -1
     try{
       await ShoppingCarts.updateOne( {_id,_id},[ 
        { $set: { 
             items: {
                 $let: {
                     vars: { ix: { $indexOfArray: [ '$items', type ] } },
                     in: { $concatArrays: [
                               { $slice: [ '$items', 0, "$$ix"] },
                               [ ],
                               { $slice: [ '$items', { $add: [ 1, "$$ix" ] }, { $size: '$items' } ] }
                          ]
                     }
                }
            }
        }}
    ]  )
     res.locals.shoppingCartItems =  await ShoppingCarts.findOneAndUpdate({_id,_id}, { $inc: {total_price: price, total_quantity: -1}}, {new:true})
     
     return next()
         
       }
     catch(err){
       console.log(err)
       return next({
         log: `cartController.deleteProduct: ERROR: ${err}`,
         message: {err: `Error occurred in cartController.deleteProduct ${err.error}`}
       });
     };
  }
  
  cartController.clearCart = async (req,res,next) => {
    console.log('entered addProduct middleware')
    const {_id} = req.body
    try{
      res.locals.shoppingCartItems = await ShoppingCarts.findOneAndUpdate({_id,_id}, {items: [], total_price: 0.00, total_quantity: 0}, {new:true})
      return next();
    } catch(err){
      console.log(err)
      return next({
        log: `cartController.clearCart: ERROR: ${err}`,
        message: {err: `Error occurred in cartController.clearCart ${err.error}`}
      });
    };
  }

  cartController.checkOut = async (req,res,next) => {
    const {_id} = req.body
    console.log('entered checkout middleware')
    try{

    response = await ShoppingCarts.findOne({ _id, _id})

    console.log(response)
    const { total_quantity, total_price } = response
    
    return next();

    } catch(err) {
      return next({
        log: `cartController.checkOut: ERROR: ${err}`,
        message: {err: `Error occurred in cartController.checkOut ${err.error}`}
      });
    }
  }
  
  module.exports = cartController;