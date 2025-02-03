// import cloudinary from "../config/cloudinary.js";
// import pdfModel from "../model/pdfModel.js";
// import fs from "fs";

// // Upload file
// const uploaPdf = async (req, res) => {
//   try {
//     const filePath = req.file.path;

//     // Upload to Cloudinary
//     const result = await cloudinary.uploader.upload(filePath, { resource_type: "raw",  access_mode: "public",});

//     // Save file details to the database with Cloudinary public_id
//     const newFile = new pdfModel({
//       name: req.file.originalname,
//       url: result.secure_url,
//       cloudinary_id: result.public_id, 
//     });

//     await newFile.save();

//     // Delete the file from local uploads folder
//     fs.unlinkSync(filePath);

//     res.status(201).send({ message: "File uploaded successfully!", file: newFile });
//   } catch (error) {
//     res.status(500).send({ message: "Error uploading file", error: error.message });
//   }
// };

// // Fetch file details
// const getPdf = async (req, res) => {
//   try {
//     const files = await pdfModel.find({});
//     res.status(200).json({ success: true, data: files });
//   } catch (error) {
//     res.status(500).send({ message: "Error retrieving files", error: error.message });
//   }
// };

// // Remove file
// const deletePdf = async (req, res) => {
//   try {
//     const file = await pdfModel.findById(req.params.id);
//     if (!file) {
//       return res.status(404).send({ message: "File not found in database" });
//     }

//     if (!file.cloudinary_id) {
//       return res.status(400).json({ message: "Cloudinary ID missing, cannot delete file" });
//     }

//     // Delete the file from Cloudinary
//     await cloudinary.uploader.destroy(file.cloudinary_id);

//     // Remove the file record from MongoDB
//     await pdfModel.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "File deleted successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Error deleting file", error: error.message });
//   }
// };

// export { getPdf, uploaPdf, deletePdf };

import cloudinary from "../config/cloudinary.js";
import pdfModel from "../model/pdfModel.js";
import fs from "fs";

// Upload PDF with sequence
const uploaPdf = async (req, res) => {
  try {
    const filePath = req.file.path;
    const { sequence , title} = req.body;  

    // Check if the sequence already exists in the database
    const existingPdf = await pdfModel.findOne({ sequence });
    if (existingPdf) {
      return res.status(400).send({ message: "Sequence number already exists." });
    }

    // Get the highest existing sequence and increment by 1 if no sequence is provided
    const latestPdf = await pdfModel.findOne({}).sort({ sequence: -1 }).limit(1);
    const nextSequence = sequence || (latestPdf ? latestPdf.sequence + 1 : 1);

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, { resource_type: "raw", access_mode: "public" });

    // Save the file with the sequence
    const newFile = new pdfModel({
      name: req.file.originalname,
      url: result.secure_url,
      cloudinary_id: result.public_id,
      sequence: nextSequence,  // Store the sequence
      title : title,
    });

    await newFile.save();
    fs.unlinkSync(filePath);  // Remove the local file

    res.status(201).send({ message: "File uploaded successfully!", file: newFile });
  } catch (error) {
    res.status(500).send({ message: "Error uploading file", error: error.message });
  }
};


// Fetch PDFs sorted by sequence
const getPdf = async (req, res) => {
  try {
    const files = await pdfModel.find({}).sort({ sequence: 1 });  // Sort by sequence field
    res.status(200).json({ success: true, data: files });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving files", error: error.message });
  }
};

// Remove PDF
const deletePdf = async (req, res) => {
  try {
    const file = await pdfModel.findById(req.params.id);
    if (!file) {
      return res.status(404).send({ message: "File not found in database" });
    }

    if (!file.cloudinary_id) {
      return res.status(400).json({ message: "Cloudinary ID missing, cannot delete file" });
    }

    // Delete the file from Cloudinary
    await cloudinary.uploader.destroy(file.cloudinary_id);

    // Remove the file record from MongoDB
    await pdfModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting file", error: error.message });
  }
};

// // Update sequence of a PDF

const updatePdfSequence = async (req, res) => {
  try {
    const { sequence, title } = req.body;
    const pdfId = req.params.id;

    // Check if the new sequence already exists (excluding the current PDF)
    const existingPdf = await pdfModel.findOne({ sequence, _id: { $ne: pdfId } });
    if (existingPdf) {
      return res.status(400).send({ message: "Sequence number already exists." });
    }

    // Update the sequence and title of the specific PDF
    const updatedPdf = await pdfModel.findByIdAndUpdate(
      pdfId,
      { sequence, title },
      { new: true }
    );

    if (!updatedPdf) {
      return res.status(404).send({ message: "PDF not found" });
    }

    res.status(200).json({ success: true, data: updatedPdf });
  } catch (error) {
    res.status(500).send({ message: "Error updating sequence", error: error.message });
  }
};

export { getPdf, uploaPdf, deletePdf, updatePdfSequence };