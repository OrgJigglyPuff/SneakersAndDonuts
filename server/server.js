const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoute = require('./routes/loginSignUp')

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{ return res.status(200).sendFile(path.resolve(__dirname,'../src/index.html'))})
app.use('/signup',authRoute)



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;