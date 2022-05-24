const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoute = require('./routes/loginSignUp')
const storeRoute = require('./routes/storeRoute')

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{ return res.status(200).sendFile(path.resolve(__dirname,'../src/index.html'))})
app.use('/auth',authRoute)
app.use('/store',storeRoute)



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

const globalErrorHandler = (err,req,res,next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: {err: 'an error occured'}
  }

  const errObj = Object.assign({},defaultErr,err);
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.messages);
}

app.use(globalErrorHandler);
module.exports = app;