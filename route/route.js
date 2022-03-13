const express = require('express')
const router = express.Router()
const { Creating, getbyId,getAll,updateOne,deleteOne}= require ('../controller/controller')
const imageUploader = require("../multer/multer")


router.post('/post', imageUploader, Creating)
router.get('/all', getAll)
router.get('/all/:id', getbyId)
router.patch('/all/:id',imageUploader, updateOne)
router.delete('/all/:id',deleteOne)


module.exports= router