import express from 'express'
import { addVideoUrl, getVideoUrl, removeVideoUrl } from '../controllers/videoController.js'
import { upload } from '../middleware/multer.js'

const videoUrlRouter = express.Router()

videoUrlRouter.post('/add' , upload.single('video'), addVideoUrl)
videoUrlRouter.get('/all' , getVideoUrl)
videoUrlRouter.delete('/:id' , removeVideoUrl)

export default videoUrlRouter;