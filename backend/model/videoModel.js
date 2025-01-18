import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    link:{type:String ,required:true}
},{timestamps:true})

const videoModel = mongoose.models.video || mongoose.model("video" , videoSchema)
export default videoModel;