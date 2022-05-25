const User = require('../models/storeModel.js')
const ShoppingCarts = require('../models/shoppingCartModel.js')
const signUpController = {};
// const bcrypt = require('bcrypt');

signUpController.createUser = async (req, res, next) => {
    console.log('-----> entered createUser middleware')
    console.log('reqbody', req.body);
    const {username, email, password} = req.body;
    const params = [username, email, password];
  
    try {
      const emailQuery = `
      SELECT email FROM users WHERE email = '${email}';
      `;
      const usernameQuery = `
      SELECT username FROM users WHERE username = '${username}'
      `;
      
      const insertQuery  = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3) RETURNING _id, username;
      `;
      
      // -- Check if email already exists
      const data = await User.query(emailQuery);
      // console.log(data);
      const dataEmail = data.rows;
      if (dataEmail.length !== 0) {
        return res.status(400).json({
          error: "Email already registered."
        });
      }

      // -- Check if username already exists
      const dataUser = await User.query(usernameQuery);
      const dataUsername = dataUser.rows;
      if(dataUsername.length !== 0) {
        return res.status(400).json({
          error: "Username already exist."
        });
      }

      //  -- Create shoppingCart (mongoDB)
      await ShoppingCarts.create({items:[],total_quantity:0, total_price:0.00}),
        (err, shoppingCarts) => {
          console.log(shoppingCarts);
        }

      // -- Create new user
      // const safePassword = await bcrypt.hash(password, 10);
      const response = await User.query(insertQuery, params);
      console.log(response)
      res.locals.user_id = response.rows[0]._id;
      res.locals.username = response.rows[0].username;
      // res.locals.shoppingCart_id = response.rows[0].shoppingCartId;
      console.log(res.locals.user_id); 
      console.log(res.locals.username); 
      // console.log(res.locals.shoppingCartId);
      console.log('New user created!')

      
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
      // -- Verify user
      const verifyQuery  = `
      SELECT username, password FROM users WHERE username = '${username}';
      `;
      
      const response = await User.query(verifyQuery);
      console.log(response)
      // -- If username doesn't exist
      const user = response.rows;
      if(user.length === 0) {
        res.status(400).json({
          error: "User is not registered. Sign up first",
        })
      } else {
        // -- Check if password is correct
        if(password === response.rows[0].password) {
          console.log('Signed in!')
        } else {
          res.status(400).json({
            error: "Wrong username/password",
          })
        }
      }
      return next();
    }
    catch(err) {
      console.log(err)
      return next({
        log: `signupController.verifyUser: ERROR: ${err}`,
        message: {err: `Error occurred in signupController.verifyUser ${err.error}`}
      });
    };       
  }
  
  
  module.exports = signUpController;

 