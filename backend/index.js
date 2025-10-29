const express = require('express');
const dbconnection = require('./config/database');

const app = express();

dbconnection();


require('dotenv').config();


const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});   