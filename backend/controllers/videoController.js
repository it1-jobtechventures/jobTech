import videoModel from "../model/videoModel.js"

const addVideoUrl = async (req ,res) => {
    try {
        const videoUrl = new videoModel({
            link:req.body.link,
        })
    
        await videoUrl.save()
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
        const videoUrl = await videoModel.findById(req.body.id)
        await videoModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: ' removed url' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addVideoUrl , getVideoUrl, removeVideoUrl}