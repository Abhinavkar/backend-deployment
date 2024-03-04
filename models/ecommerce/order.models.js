import mongoose from "mongoose";
const orderItems = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderstatus:{
        type:String,
        required:true
    },
    orderItems:{
        type:[orderItems],
        
    },
    shippingAddress:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },
    status:{
        type:String,
        enum:["PENDING", "CANCELLED","DELIVERED"],
        default:"PENDING"
    }
    
},{timestamps : true })

export const  Order = mongoose.model("Order",orderSchema);
