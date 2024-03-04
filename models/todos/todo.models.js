import mongoose from "mongoose ";
const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subtodo",
        }
    ]
    
},{timestamps : true})

export const todo=mongoose.model("todo",todoSchema);
