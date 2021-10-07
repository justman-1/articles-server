const mongoose = require("mongoose")

let mongo = require('./mongo')
let connectToMongoDb = async () => {
	await mongo().then(MongoClient => {
		try{
			console.log('Connected to mongoDB!')
		} finally{
			console.log("ok")
		}
	})
}
connectToMongoDb()

const Schema = mongoose.Schema
const userScheme = new Schema({
    email: String,
    login: String,
    password: String,
    token: String
})
const postScheme = new Schema({
    header: String,
    body: Array,
    preview: String,
    theme: String,
    date: String,
    time: String,
    views: {type: Number, default: 0}
})

const User = mongoose.model("User", userScheme)
const Post = mongoose.model("Post", postScheme)

module.exports = mongoose