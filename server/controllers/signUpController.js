const User = require('../models/storeModel.js')
const ShoppingCarts = require('../models/shoppingCartModel.js')
const signUpController = {};
// const bcrypt = require('bcrypt');

signUpController.createUser = async (req, res, next) => {
    console.log('-----> entered createUser middleware')
    console.log('reqbody', req.body);
    const {username, email, password} = req.body;
    
  
    try {
// create new user
      const insertQuery  = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3) RETURNING _id, username;
      `;
      // const safePassword = await bcrypt.hash(password, 10);
      const params = [username, email, password];
      const response = await User.query(insertQuery, params);
      console.log(response)
      res.locals.user_id = response.rows[0]._id;
      res.locals.username = response.rows[0].username;
      // res.locals.shoppingCart_id = response.rows[0].shoppingCartId;
      console.log(res.locals.user_id); 
      console.log(res.locals.username); 
      // console.log(res.locals.shoppingCartId);
      console.log('New user created!')

      await ShoppingCarts.create({items:[],total_quantity:0, total_price:0.00})
      return next();
    }
    catch(err){
      console.log(err)
      return next({
        log: `signupController.createUser: ERROR: ${err}`,
        message: {err: `Error occurred in signupController.createUser ${err.error}`}
      });
    };
  };

  signUpController.verifyUser = async(req, res, next) => {
    console.log('------> entered verifyUser middleware')
    console.log('reqbody', req.body);
    const {username, password} = req.body;

    try {
      // verify
      const verifyQuery  = `
      SELECT username, password FROM users WHERE users.username = ${username};
      `;
      
      const response = await User.query(verifyQuery);
      console.log(response)
      console.log('Signed in!')
      return next();
    }
    catch(err) {
      console.log(err)
      return next({
        log: `signupController.createUser: ERROR: ${err}`,
        message: {err: `Error occurred in signupController.createUser ${err.error}`}
      });
    };       
  }
  
  
  module.exports = signUpController;

 