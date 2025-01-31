import express from 'express'
import { faqAdd, listFaq, removeFaq, updateFaq } from '../controllers/faqController.js'

const faqRouter = express.Router()

faqRouter.post('/add' , faqAdd)
faqRouter.get('/list' , listFaq)
faqRouter.post('/delete' , removeFaq)
faqRouter.post('/update' , updateFaq)

export default faqRouter