const User = require('../models/storeModel.js')
const ShoppingCart = require('../models/shoppingCartModel.js')
const signUpController = {};
// const bcrypt = require('bcrypt');

signUpController.createUser = async (req, res, next) => {
    console.log('entered createUser middleware')
    console.log('reqbody', req.body);
    const {username, email, password} = req.body;
    
  
    try{
      
// create new user
      const insertQuery  = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3) RETURNING _id, username;
      `;
    // const safePassword = await bcrypt.hash(password, 10);
      const params = [username, email, password];
       const response = await User.query(insertQuery, params);
       console.log(response)
      // res.locals.user_id = response.rows[0]._id;
      // res.locals.username = response.rows[0].username;
      // console.log(res.locals._id); 
      // console.log(res.locals.username); 
      // console.log('New user created!')
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
  
  
  module.exports = signUpController;