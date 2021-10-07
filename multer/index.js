const multer = require('multer')
const random = require('random-string-generator')

const imageStorageConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(req.body)
        cb(null, req.body.name)
    }
})

const videoStorageConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'videos')
    },
    filename: (req, file, cb)=>{
        console.log(req.body)
        cb(null, req.body.name)
    }
})

const imageConfig = multer({storage: imageStorageConfig}).fields([{name: 'image'}])
const videoConfig = multer({storage: videoStorageConfig}).fields([{name: 'video'}])

module.exports.imageConfig = imageConfig
module.exports.videoConfig = videoConfig