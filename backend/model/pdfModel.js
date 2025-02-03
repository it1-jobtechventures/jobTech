import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sequence: { type: Number, required: true, unique: true },  
  title:{ type: String, required: true },
});

const pdfModel = mongoose.models.pdf || mongoose.model("pdf", pdfSchema);
export default pdfModel;
