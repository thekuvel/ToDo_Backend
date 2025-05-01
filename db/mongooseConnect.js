import mongoose from "mongoose";

let mongoDBURI = "mongodb+srv://thekuvel:EU6005CCWq8VK09U@guvitask.hrq50.mongodb.net/ToDo?retryWrites=true&w=majority&appName=GuviTask";

async function mongooseConnect() {
    try {
        await mongoose.connect(mongoDBURI);
        console.log("Mongo DB Atlas connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default mongooseConnect