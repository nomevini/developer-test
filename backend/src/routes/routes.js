const express = require('express')
const routes = express()

// controllers
const {uploadFile} = require('../api/controllers/upload')

// middlewares
const {verifyUpload} = require('../api/middleware/verifyUpload')
const {upload} = require('../api/middleware/multerConfig')
const { getOlts } = require('../api/controllers/olts')

routes.post('/api/upload', upload.single('file'), verifyUpload, uploadFile)
routes.get('/api/olts', getOlts)

module.exports = routes