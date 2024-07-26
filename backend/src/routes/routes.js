const express = require('express')
const routes = express()

// controllers
const {uploadFile} = require('../api/controllers/upload')

// middlewares
const {verifyUpload} = require('../api/middleware/verifyUpload')
const {upload} = require('../api/middleware/multerConfig')

routes.post('/upload', upload.single('file'), verifyUpload, uploadFile)

module.exports = routes