import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type:String,
        unique:true,
        required:true,
    },
    description:{
        type:String,
        unique:true,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", 
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

export const Task = mongoose.model("Task",schema);