import pdfModel from "../model/pdfModel.js";
import fs from 'fs'

// Upload file
const uploaPdf = async (req, res) => {
  try {
    const { originalname, path, size } = req.file;
    const file = new pdfModel({
      name: originalname,
      path,
      size,
    });

    await file.save();
    res.status(201).send({ message: 'File uploaded successfully!', file });
  } catch (error) {
    res.status(500).send({ message: 'Error uploading file', error: error.message });
  }
};

// Fetch file details
const getPdf = async (req, res) => {
  try {
    const file = await pdfModel.find({});
    if (!file) return res.status(404).send({ message: 'File not found' });

    res.json({success:true , data:file})
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving file', error: error.message });
  }
};

// // Remove file


const deletePdf = async (req, res) => {
  try {
    const file = await pdfModel.findById(req.params.id);
    if (!file) {
      return res.status(404).send({ message: 'File not found in database' });
    }

    // Check if file exists in the filesystem
    if (fs.existsSync(file.path)) {
      // Delete file from the filesystem
      fs.unlink(file.path, async (err) => {
        if (err) {
          return res.status(500).send({ message: 'Error deleting file from filesystem', error: err.message });
        }

        // Remove file from the database
        await pdfModel.findByIdAndDelete(file._id); // Updated line
        res.status(200).send({ message: 'File deleted successfully' });
      });
    } else {
      // If file does not exist, still remove the database entry
      await pdfModel.findByIdAndDelete(file._id); // Updated line
      res.status(404).send({ message: 'File not found on server, removed from database' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting file', error: error.message });
  }
};


export {getPdf ,uploaPdf ,deletePdf}