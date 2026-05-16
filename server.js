const express = require('express')
const db  = require('./db')
const app = express();
const passport = require('passport')
const Local_strategy = require('passport-local').Strategy;
const Person = require('./models/person')
require('dotenv').config();


const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(passport.initialize())
const PORT= process.env.PORT || 3200;

const localauth = passport.authenticate('local',({session:false}))

passport.use( new Local_strategy(async(Username,password,done)=>{

try{

    const user =await Person.findOne({username:Username})
    if(!user){

      return done(null,false,{"message":"Incorrect username"})
    }

    const ispasswordmatch = user.password ===password ? true:false;
    if(ispasswordmatch){
      return done(null,user)
    }

}catch(error){
        return done(null,false,{"message":"incoreect credentials"})
}




}))




app.get('/',(req,res)=>{
   console.log('express is running');
   
})



const menuroutes = require('./routes/menuroutes')
const personroutes = require('./routes/personroutes');



app.use('/menu',menuroutes)
app.use('/person',personroutes)


app.listen(PORT)








