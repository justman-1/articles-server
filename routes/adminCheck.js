const express = require('express')
const router = express.Router()
const User = require('../mongo/index').models.User
const encode = require('../crypto/encode')

router.get('/', (req, res)=>{
    const data = req.query
    console.log(req.query)
    User.findOne({login: data.login}, ['password', 'token'], (err, docs)=>{
        if(err) return res.status(500).send('Server error')

        if(!docs) res.status(405).send('Unknown login')

        else if(docs.password != encode(data.password)){
            res.status(406).send('Incorrect password')
        }
        else{
            res.send(docs.token)
        }
    })
})

module.exports = router