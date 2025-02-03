import express from 'express';
import { upload } from '../middleware/multer.js';
import { deletePdf,  getPdf,  uploaPdf ,updatePdfSequence} from '../controllers/pdfController.js'

const pdfRouter = express.Router();

// Route to upload a file
pdfRouter.post('/upload', upload.single('file'), uploaPdf);

// Route to retrieve a file
pdfRouter.get('/files', getPdf);

pdfRouter.delete('/files/:id' , deletePdf)

// Route to update the sequence of a PDF by ID
pdfRouter.put('/files/sequence/:id', updatePdfSequence);

export default pdfRouter;
