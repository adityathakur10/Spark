const { LENGTH_REQUIRED } = require('http-status-codes')
const mongoose=require('mongoose')

const counterSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    seq:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('Counter',counterSchema)