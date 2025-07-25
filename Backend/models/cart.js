const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    userId:{
        type:Number,
        ref:'User',
        required:true,
        unique:true
    },
    products:[{
        productId:{
            type:Number,
            ref:'Product',
            required:true,

        },
        quantity:{
            type:Number,
            default:1,
            min:1,
        },
        size:{
            type:String
        },
        color:{
            type:String
        }
    }],
    total_price:{
        type:Number,
        default:0.0
    }
},{timestamps:true});

module.exports=mongoose.model('Cart',cartSchema);