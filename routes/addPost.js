const express = require('express')
const router = express.Router()
const random = require('random-string-generator')
const fs = require('fs')
const User = require('../mongo/index').models.User
const Post = require('../mongo/index').models.Post
const encode = require('../crypto/encode')

router.post('/', (req, res)=>{
    let data = req.body
    console.log(data)
    data.body = JSON.parse(data.body)
    console.log(data)
    console.log(1)
    User.findOne({token: data.t}, (err, docs)=>{
        console.log(2)
        if(docs != undefined && docs != null){
            if(data.header.replace(/\s/g, '') == ''){
                res.status(416).send('Header must have letters')
            }
            else if(data.body.length == 1 && data.body[0].content.replace(/\s/g, '') == ''){
                res.status(416).send('Body of the post must have letters')
            }
            else{
                console.log(3)
                Post.create({
                    header: data.header,
                    body: data.body,
                    preview: data.preview,
                    theme: data.theme,
                    date: data.date,
                    time: data.time
                }, (err, result)=>{
                    if(err) return res.status(500)
                    console.log(4)
                    console.log(result)
                    res.send('ok')
                })
            }
        }
        else{
            res.status(410).send('You are not admin.')
        }
    })
})

//Post.deleteMany({}, ()=>{})

module.exports = router