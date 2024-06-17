const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PlaceSchema = new Schema({
    name:String,
    data:String
})

const Place = new mongoose.model("place", PlaceSchema)

module.exports = Place