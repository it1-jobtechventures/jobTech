import mongoose from 'mongoose';

const excelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const excelModel = mongoose.models.excel || mongoose.model("excel", excelSchema)
export default excelModel;
