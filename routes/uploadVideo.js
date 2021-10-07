const express = require('express')
const router = express.Router()
const Post = require('../mongo/index').models.Post
const fs = require('fs')
const videoConfig = require('../multer/index').videoConfig

router.post('/', videoConfig, (req, res)=>{
    res.send('ok')
})

module.exports = router