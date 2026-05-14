const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.MONGO_URL_LOCAL;
//const url = process.env.MONGO_URL

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected',()=>{
      console.log("database is connected");
      
})

db.on('disconnected',()=>{
    console.log('databse is disconnected');
    
})

db.on('error',()=>{
    console.log('error');
    
})


module.exports = db;