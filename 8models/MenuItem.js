const mongoose=require('mongoose');

const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true ,
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    }
})

const MenuItem=mongoose.model('MenuItem',menuitemschema);
module.exports=MenuItem;