import express from "express";
import { taskModel } from "../db/model.js";

let taskRouter = express.Router();

taskRouter.get("/", async(req,res) => {
    res.send("Task API")
})

taskRouter.post("/", async(req,res) => {
    try {
        let body = req.body;
        // console.log(body);
        
        let newTask = await new taskModel({...body});
        let task = await newTask.save();

        res.send({msg:"Task created successfully", code:1})

    } catch (error) {
        console.log(error);
        res.send({msg:"Failed task creation", error, code:0})
    }

})

taskRouter.post("/alltask", async(req,res) => {
    try {
        let body = req.body;
        console.log(body);
        
        let taskArray = await taskModel.find({email:body.email, isCompleted:false});

        res.send({msg:"Tasks array", taskArray, code:1})

    } catch (error) {
        console.log(error);
        res.send({msg:"Error try later", error, code:0})
    }

})

taskRouter.post("/update", async(req,res) => {
    try {
        let body = req.body;
        let {_id, ...data } = body
        // console.log(body);
        
        let updateTask = await taskModel.updateOne({_id:body._id},{
            ...data
        });
        // await updateTask.save();

        res.send({msg:"Task updated successfully", code:1})

    } catch (error) {
        console.log(error);
        res.send({msg:"Failed task updation", error, code:0})
    }

})

taskRouter.post("/delete", async(req,res) => {
    try {
        let body = req.body;
        let {_id, ...data } = body
        // console.log(body);
        
        let updateTask = await taskModel.deleteOne({_id:body._id});
        // await updateTask.save();

        res.send({msg:"Task deleted successfully", code:1})

    } catch (error) {
        console.log(error);
        res.send({msg:"Failed task deletion", error, code:0})
    }

})

taskRouter.post("/completedtask", async(req,res) => {
    try {
        let body = req.body;
        console.log(body);
        
        let taskArray = await taskModel.find({email:body.email, isCompleted:true});

        res.send({msg:"Tasks array", taskArray, code:1})

    } catch (error) {
        console.log(error);
        res.send({msg:"Error try later", error, code:0})
    }

})

export default taskRouter