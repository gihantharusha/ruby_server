const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AnimalSchema = new Schema({
    name:String,
    data: String
})
const Animal = new mongoose.model("animal", AnimalSchema)

module.exports = Animal