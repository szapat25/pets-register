const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');

//settings

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/pets', require('./routes/pets-routes'));

//starting the server
app.listen(3000, () =>{
    console.log('Server on port 3000');
});