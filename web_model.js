const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WebSchema = new Schema({
    url: String,
    name: String
})

const Web = new mongoose.model("web", WebSchema)

module.export = Web