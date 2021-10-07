const express = require('express')
const cors = require("cors")
var bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/index')

let PORT = process.env.PORT || 80

const server = require('http').createServer(app).listen(PORT)
console.log(PORT)

app.use(express.json({limit: '15000mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50000mb' }))
app.use(bodyParser.json({limit:'50000mb'}))
app.use(bodyParser.text({limit:'50000mb'}))
app.use(cors({
    origin: '*'
}))
app.use('/', routes)