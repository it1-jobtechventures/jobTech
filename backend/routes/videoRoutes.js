import express from 'express'
import { addVideoUrl, getVideoUrl, removeVideoUrl } from '../controllers/videoController.js'

const videoUrlRouter = express.Router()

videoUrlRouter.post('/add' , addVideoUrl)
videoUrlRouter.get('/all' , getVideoUrl)
videoUrlRouter.post('/remove' , removeVideoUrl)

export default videoUrlRouter;