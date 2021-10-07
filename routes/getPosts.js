const express = require('express')
const router = express.Router()
const fs = require('fs')
const Post = require('../mongo/index').models.Post

router.get('/', async (req, res)=>{
    let index = parseInt(req.query.index)
    let ids = await Post.find().select(['views'])
    console.log(ids)
    let length = ids.length
    let num = length - index - 10
    let docs;
    if(num >= 0){
        docs = await Post.find()
        .select(['header', 'views', '_id', 'preview', 'date', 'time', 'theme'])
        .skip(num)
        .limit(10)
        let docs2 = []
        for(i=docs.length - 1;i>-1;i--){
            docs2.push(docs[i])
        }
        docs = docs2
    }
    else{
        num = 10 + num
        docs = await Post.find()
        .select(['header', 'views', '_id', 'preview', 'date', 'time', 'theme'])
        .limit(num)
        let docs2 = []
        for(i=docs.length - 1;i>-1;i--){
            docs2.push(docs[i])
        }
        docs = docs2
    }

    res.send(docs)
})

module.exports = router