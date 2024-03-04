import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    description : {
        type : String,
        required : true,
        lowercase : true
    },
    productImage:{
        type:String,
        required:true

    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        default:0,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Category",

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        

    }
},{timestamps : true })

export const Product = mongoose.model("Product",productSchema) ;