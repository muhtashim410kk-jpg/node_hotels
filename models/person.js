const mongoose = require('mongoose')

const Personschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    number:{
        type:Number,
        required:true
    },

    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:["chef","manager","waiter"]
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const Person = mongoose.model("Person",Personschema)
module.exports =Person;