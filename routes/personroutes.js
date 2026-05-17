const express = require('express')
const router = express.Router()
const Person = require('./../models/person')
const {jwtauthmilddleware,generatetoken} =require('./../jwt')


router.get('/',jwtauthmilddleware,async(req,res)=>{
     
    try{
        
       const persondata = await  Person.find();
       res.status(200).json(persondata);


    }catch(error){
        res.status(500).json({"message":"internal serevr error"})

    }
    
})

router.post('/signup',async(req,res)=>{
    
      try{
        
        const Persondata = req.body;
        const newPersondata = new Person(Persondata);

        const response = await newPersondata.save();
          
        const payload ={
          id:response.id,
          username: response.username
        }


        const token = generatetoken(payload)
        console.log("token is",token);
        res.status(200).json({response:response,token:token})
      }catch(error){
        res.status(500).json({"message":"internal server error"})
      }
         
        
}

)

router.post('/login',async(req,res)=>{

     try{
             
      //extract username and password from req.body and then match it from database
        const {username,password} = req.body;

        const user = await Person.findOne({username:username})
          
        if(!user) return res.status(401).json({"message":"invalid username"})

          if(user.password !== password){
            res.status(401).json({"message":"incorrect password"})
          }
          
           

          const payload = {
            id:user.id,
            username:user.username
          }

          const token = generatetoken(payload)
          console.log(token);
          
          if(!token)  return res.status(401).json({"message":"token not found"})

            res.status(200).json({
    message: "Login successful",
    token: token
});




     }catch(error){
              res.status(401).json({"message":"token not found"})

     }



})



module.exports= router;