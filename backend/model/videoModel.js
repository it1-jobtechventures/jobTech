import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    cloudinary_id: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
},{timestamps:true})

const videoModel = mongoose.models.video || mongoose.model("video" , videoSchema)
export default videoModel;