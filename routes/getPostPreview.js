const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res)=>{
    let name = req.query.preview
    res.write('data:image/jpeg;base64, ')
    let stream = fs.createReadStream(`images/${name}`, 'base64')
    stream.pipe(res)
})

module.exports = router