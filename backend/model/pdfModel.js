import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const pdfModel = mongoose.models.pdf || mongoose.model("pdf", pdfSchema)
export default pdfModel;
