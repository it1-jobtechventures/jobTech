import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import excelModel from "../model/excelModel.js";

// Upload file
const uploadExcel = async (req, res) => {
  try {
    const filePath = req.file.path;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, { resource_type: "raw",  access_mode: "public",});

    // Save file details to the database with Cloudinary public_id
    const newFile = new excelModel({
      name: req.file.originalname,
      url: result.secure_url,
      cloudinary_id: result.public_id, 
    });

    await newFile.save();

    // Delete the file from local uploads folder
    fs.unlinkSync(filePath);

    res.status(201).send({ message: "File uploaded successfully!", file: newFile });
  } catch (error) {
    res.status(500).send({ message: "Error uploading file", error: error.message });
  }
};

// Fetch file details
const getExcel = async (req, res) => {
  try {
    const files = await excelModel.find({});
    res.status(200).json({ success: true, data: files });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving files", error: error.message });
  }
};

// Remove file
const deleteExcel = async (req, res) => {
  try {
    const file = await excelModel.findById(req.params.id);
    if (!file) {
      return res.status(404).send({ message: "File not found in database" });
    }

    if (!file.cloudinary_id) {
      return res.status(400).json({ message: "Cloudinary ID missing, cannot delete file" });
    }

    // Delete the file from Cloudinary
    await cloudinary.uploader.destroy(file.cloudinary_id);

    // Remove the file record from MongoDB
    await excelModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting file", error: error.message });
  }
};

export { uploadExcel, getExcel, deleteExcel };
