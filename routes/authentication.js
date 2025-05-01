import express from "express";
import { userModel } from "../db/model.js";
import jwt from "jsonwebtoken";

let userRouter = express.Router();

userRouter.get("/signup", async(req,res)=>{
    res.send({msg:"Sign Up"})
})

userRouter.post("/signup", async(req,res)=>{
    try {
        let body = req.body;

        let userObj = await userModel.findOne({email:body.email});

        console.log(userObj);

        if(userObj){
            res.send({msg:"User already present.", code:0})
        }else{
            let newUser = await new userModel({...body});
            await newUser.save();
            res.send({msg:"User created successfully.", code:1})
        }
    } catch (error) {
        res.send({msg:"Failed user creation.", code:0, error})
    }
})

userRouter.post("/signin", async(req,res)=>{
    try {
        let body = req.body;
        let userObj = await userModel.findOne({email:body.email})
        if(userObj){
            let token = jwt.sign({...body, isSignedIn:true}, "jwtpasskey2025", {expiresIn:'1h'});
            res.send({msg:"User signed in.", userObj, code:1, token});
        }else{
            res.send({msg:"Signup, User not found.", code:0})
        }
        
    } catch (error) {
        res.send({msg:"Failed user creation.", code:0, error})
    }
})

export default userRouter