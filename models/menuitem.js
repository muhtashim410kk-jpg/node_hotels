const mongoose = require('mongoose')


const menuschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    taste:{
        type:String,
        enum :["sweet","sour","spicy"],
        required:true
    },
    is_drink:{
        type:String,
        default:false
    },
    ingredients:{
        type:String,
        default:[]
    },
    number_sales:{
        type:Number,
        default:0
    }




})

const Menuitem = mongoose.model("Menuitem",menuschema)

module.exports = Menuitem;