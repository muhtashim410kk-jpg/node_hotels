const express = require('express')
const router = express.Router()
const Menuitem = require('./../models/menuitem')



router.post('/',async(req,res)=>{
    
      try{
          
          const data = req.body;
   const newdata = new Menuitem(data);

   const response = await newdata.save()

   res.status(200).json(response)

   } catch(error){
        
      res.status(500).json({"message":"internal server error"})
   }
  

 } 
)


router.get('/:Taste',async(req,res)=>{

   const Taste = req.params.Taste;

  try{

        if(Taste=="sweet"|| Taste=="sour"||Taste=="spicy"){
       const response = await Menuitem.find({taste:Taste })
       res.status(200).json(response)
       
   }

  }catch(error){
   res.status(500).json({"message":"internal server error"})
  }

 

})

module.exports = router;