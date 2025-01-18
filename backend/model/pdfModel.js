import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  name: { type: String },
  path: { type: String },
  size: { type: Number }, // File size in bytes
  createdAt: { type: Date, default: Date.now },
});

const pdfModel = mongoose.models.pdf || mongoose.model("pdf", pdfSchema)
export default pdfModel;
