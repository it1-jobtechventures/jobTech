import express from 'express';
import { upload } from '../middleware/multer.js';
import { deleteExcel, getExcel, uploadExcel } from '../controllers/excelController.js';

const excelRouter = express.Router();

// Route to upload a file
excelRouter.post('/upload', upload.single('file'), uploadExcel);

// Route to retrieve a file
excelRouter.get('/files',getExcel );

excelRouter.delete('/:id' , deleteExcel)

export default excelRouter;
