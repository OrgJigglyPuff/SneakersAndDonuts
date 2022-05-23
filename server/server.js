const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//require routers
const petRouter = require('./routes/petRoute.js');
const apiRouter = require('./routes/api.js');

// parse incoming request body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express static - using if we decide on images
// app.use('')

// route handlers
app.use('/pet', petRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

// route handler for any requests to unknown route
app.use((req, res) => res.status(404).send('uh oh'));

// express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
