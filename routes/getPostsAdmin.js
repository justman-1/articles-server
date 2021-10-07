const express = require('express')
const router = express.Router()
const fs = require('fs')
const User = require('../mongo/index').models.User
const Post = require('../mongo/index').models.Post

router.get('/', (req, res)=>{
    const data = req.query
    console.log(req.query)
    User.findOne({token: data.t}, (err, results)=>{
        if(err) return res.status(500).send('Server error')

        if(!results) res.status(416).send('You are not admin.')

        else{
            Post.find({}, (err, docs)=>{
                let result = []
                console.log(docs)
                for(i=docs.length-1;i>-1;i--){
                    result.push({
                        img: docs[i].preview,
                        header: docs[i].header,
                        date: docs[i].date,
                        time: docs[i].time,
                        views: docs[i].views,
                        id: docs[i]._id
                    })
                }
                res.send(result)
            })
        }
    })
})

module.exports = router