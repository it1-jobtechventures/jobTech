import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    type: { type: String, enum: [ 'general' , 'investor'], required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
    companyName: { type: String },
    companyPublishDate: { type: Date }, 
},{timestamps:true})

const formModel = mongoose.models.forn || mongoose.model("form", formSchema)
export default formModel;