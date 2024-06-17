const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SecreteSchema = new Schema({
    data: String,
    password: String
})

const Secrete = new mongoose.model("secrete", SecreteSchema)

module.export = Secrete