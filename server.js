import express from "express";
import cors from "cors"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import taskRouter from "./routes/taskRouter.js";
import mongooseConnect from "./db/mongooseConnect.js";
import userRouter from "./routes/authentication.js";


dotenv.config();

let port = 8000; 
// let port = process.env.Server_Port;
let server = express();

await mongooseConnect();

server.use(express.json()); // To handle JSON data
server.use(cors());

server.use("/task", taskRouter);
server.use("/authentication", userRouter);

server.listen(port,()=>{
    console.log(` ${Date().toString()} Server running on port: ${port}`);
});