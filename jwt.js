const jwt = require('jsonwebtoken')



const generatetoken = (Userdata)=>{
    return jwt.sign(Userdata,process.env.SECRET_KEY)

}

module.exports =generatetoken;