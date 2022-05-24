const Store = require('../models/storeModel.js')
const ShoppingCarts = require('../models/shoppingCartModel.js')
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
      log: `cartController.addProduct: ERROR: ${err}`,
      message: {err: `Error occurred in cartController.getProduct ${err.error}`}
    });
  };
};
cartController.addProduct = async (req, res, next) => {
    console.log('entered addProduct middleware')
   let {_id, item, price } = req.body

   if(typeof price === 'string'){
    price = Number(price.slice(1))
   }
   
    try{
    res.locals.shoppingCartItems=  await ShoppingCarts.findOneAndUpdate({_id,_id}, {$push: {"items": item}, $inc: {total_price: price, total_quantity: 1}}, {new:true})
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
    let {_id, item, price } = req.body
 
    if(typeof price === 'string'){
     price = Number(price.slice(1)*-1)
    }
    
     try{
       await ShoppingCarts.updateOne( {_id,_id},[ 
        { $set: { 
             items: {
                 $let: {
                     vars: { ix: { $indexOfArray: [ '$items', item ] } },
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
  
  
  module.exports = cartController;