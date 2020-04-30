// imported
const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const models = require('./models');
const db = require('./db');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

// start instance of express server at port 5500
const app = express(); //app variable is storing our router
const PORT = 5500;

// check to make sure database is connected
db.authenticate().
then(() => {
  console.log('connected to the database');
});

// import static files (html, css)
app.use(express.static(__dirname + '/style'));

// get the route and send request based on route
app.get('/', (req, res) => {
    res.send('Go!');
});

//listen at port 5500
app.listen(PORT, () => {
    console.log('listening');
});


