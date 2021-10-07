const express = require('express')
const router = express.Router()
const Post = require('../mongo/index').models.Post
const fs = require('fs')
const imageConfig = require('../multer/index').imageConfig

router.post('/', imageConfig, (req, res)=>{
    console.log(req.body.name)
    res.send(req.body)
})

module.exports = router