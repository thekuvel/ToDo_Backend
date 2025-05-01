import mongoose, {model, Schema} from "mongoose"

let taskSchema = new mongoose.Schema({

    title:{
        type:"string",
        reqired:true
    },
    email:{
        type:"string",
        required:true
    },
    description:{
        type:"string",
    },
    isCompleted:{
        type:"boolean",
        default:false
    }

});

let userSchema = new mongoose.Schema({

    email:{
        type:"string",
        reqired:true
    },
    password:{
        type:"string",
    }

});

let taskModel = new mongoose.model("task", taskSchema, "tasks");
let userModel = new mongoose.model("user", userSchema, "users");


export{taskModel, userModel}