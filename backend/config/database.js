const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error while connecting to the database:', error);
  }
};

module.exports = dbconnection;
