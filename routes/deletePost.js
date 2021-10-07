const express = require('express')
const router = express.Router()
const Post = require('../mongo/index').models.Post
const fs = require('fs')

router.post('/', async (req, res)=>{
    let id = req.body.id
    let post = await Post.findOne({_id: id})
    fs.unlinkSync('images/' + post.preview)
    for(i=0;i<post.body.length;i++){
        if(post.body[i].type == 'image'){
            fs.unlinkSync('images/' + post.body[i].content)
        }
        else if(post.body[i].type == 'video'){
            fs.unlinkSync('videos/' + post.body[i].content)
        }
    }
    Post.deleteOne({_id: id}, (err, docs)=>{
        res.send()
    })
})

module.exports = router