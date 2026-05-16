const express = require('express')
const router = express.Router()
const Person = require('./../models/person')
const generatetoken =require('./../jwt')


router.get('/',async(req,res)=>{
     
    try{
        
       const persondata = await  Person.find();
       res.status(200).json(persondata);


    }catch(error){
        res.status(500).json({"message":"internal serevr error"})

    }
    
})

router.post('/signup',async(req,res)=>{
    
      
         
        const Persondata = req.body;
        const newPersondata = new Person(Persondata);

        const response = await newPersondata.save();
        res.status(200).json(response)
        const token = generatetoken(response.username)
        console.log("token is",token);
        
}

)

module.exports= router;