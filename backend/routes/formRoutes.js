import express from 'express'
import { getAllForms, submitForm } from '../controllers/formController.js';

const formRouter = express.Router();

//api endpoint
formRouter.post("/submit" ,submitForm);
formRouter.get("/" ,getAllForms);

export default formRouter;