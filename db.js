const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/orangetrain'

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