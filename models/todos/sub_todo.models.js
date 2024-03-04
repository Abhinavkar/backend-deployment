import mongoose from "mongoose"
import { todo } from "./todo.models"
const subTodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  
  },
  complete:{
    type:Boolean,
    default:false 
  },
  createdBy : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
},{timestamps : true })

export const subTodo = mongoose.model("subtodo",subTodoSchema)