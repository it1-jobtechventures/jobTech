import express from 'express'
import { faqAdd, listFaq, removeFaq } from '../controllers/faqController.js'

const faqRouter = express.Router()

faqRouter.post('/add' , faqAdd)
faqRouter.get('/list' , listFaq)
faqRouter.post('/delete' , removeFaq)

export default faqRouter