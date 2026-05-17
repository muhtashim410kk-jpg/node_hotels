const jwt = require('jsonwebtoken')


const jwtauthmilddleware = (req,res,next)=>{

    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({"message":"token not found"})

      const token = req.headers.authorization.split(' ')[1]
      if(!token) return res.status(401).json({"messge":"invalid token"})


        
              
            const decoded = jwt.verify(token,process.env.SECRET_KEY)
            req.user = decoded
            next();

        



}


const generatetoken = (Userdata)=>{
    return jwt.sign(Userdata,process.env.SECRET_KEY)

}

module.exports = {jwtauthmilddleware,generatetoken}