const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ContactsSchema = new Schema({
    number: String,
    name: String
})

const Contacts = new mongoose.model("contacts", ContactsSchema)

module.export = Contacts