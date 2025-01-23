import cloudinary from "../config/cloudinary.js"
import videoModel from "../model/videoModel.js"
import fs from "fs";

const addVideoUrl = async (req ,res) => {
    try {
        const videoPath = req.file.path
        const result = await cloudinary.uploader.upload(videoPath , {resource_type:"video" , access_mode:'public'})
        
        const newVideo = new videoModel({
            name: req.file.originalname,
            url: result.secure_url,
            cloudinary_id: result.public_id,
        })
        await newVideo.save()
        await fs.unlinkSync(videoPath)
        res.json({success:true ,message:"url added"})
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const getVideoUrl = async (req, res) => {
    try {
        const videos = await videoModel.find({});
        res.json({success:true , data:videos})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const removeVideoUrl= async (req , res) =>{
    try {
        const videoUrl = await videoModel.findById(req.params.id)
        if (!videoUrl) {
            return res.status(404).send({ message: "video not found in database" });
        }
        if (!videoUrl.cloudinary_id) {
            return res.status(400).json({ message: "Cloudinary ID missing, cannot delete video" });
        }
        await cloudinary.uploader.destroy(videoUrl.cloudinary_id)
        await videoModel.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: ' removed url' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addVideoUrl , getVideoUrl, removeVideoUrl}