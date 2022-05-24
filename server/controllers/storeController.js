const Store = require('../models/storeModel.js')
const ShoppingCart = require('../models/shoppingCartModel.js')
const storeController = {};
// const bcrypt = require('bcrypt');

storeController.getProducts = async (req, res, next) => {
    console.log('entered getProducts middleware')
    const resultArray = []
    const donutQuery = `SELECT * FROM donuts`
    const sneakersQuery = `SELECT * FROM sneakers`
    
   
    try{

        const {rows} = await Store.query(donutQuery)
        console.log(rows)        
        const response = await Store.query(sneakersQuery)
        res.locals.products = [rows,response.rows]
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
  
  
  module.exports = storeController;