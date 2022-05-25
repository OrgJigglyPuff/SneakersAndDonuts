const mongoose = require('mongoose');
require('dotenv').config()
const myURI = process.env.MONGODB_URI
// 'mongodb+srv://codesmith:<password>@cluster0.onyhb.mongodb.net/?retryWrites=true&w=majority'

// @cluster0.onyhb.mongodb.net
mongoose.connect(myURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({ 
  items: [{product: String,
  price: Number, 
  image: String}],
  total_quantity: {type: Number},
  total_price: {type: Number},
  user_id: {type: Number}
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;