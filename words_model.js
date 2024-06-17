const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WordsSchema = new Schema({
    word: String
})


const Words = new mongoose.model("words", WordsSchema)

module.exports = Words