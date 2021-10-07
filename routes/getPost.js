const express = require('express')
const router = express.Router()
const Post = require('../mongo/index').models.Post
const fs = require('fs')

router.get('/', async (req, res)=>{
    let id = req.query.id
    let viewed = req.query.viewed
    console.log(viewed)

    let post = await Post.findOne({_id: id})
        .select(['body', 'header', 'date', 'time', 'theme', 'views', 'theme'])

    if(viewed == 'false'){
        let views = +post.views + 1
        console.log(views)
        Post.updateOne(
            {_id: id},
            {views: views},
            (err, docs)=>{ if(err) console.log(err) }
        )
    }

    res.send(post)
})

module.exports = router