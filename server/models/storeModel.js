const { Pool } = require('pg');
require('dotenv').config()
const PG_URI = process.env.POSTGRES_URI
// console.log(PG_URI)
const pool = new Pool ({
  connectionString: PG_URI,
})

module.exports = {
  query: async (text, params, callback) => {
    try{
    console.log('query executed', text);
    const result = await pool.query(text, params, callback)
    return result;
    } 
    catch(e){
      console.log("error: ", e)
    }
  }
};



