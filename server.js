// importing our requirements for this project
// setting constants to require express,
// our routes for the api and html 
// and a connection 3001 for us to use
const express = require('express');
const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js');
const PORT = process.env.port || 3001;

//express const for us to use
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);


// listener for our app and returning message that app is 
// listening at our port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
