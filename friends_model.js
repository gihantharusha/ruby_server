const mongoose = require("mongoose")

const Schema = mongoose.Schema

const FriendSchema = new Schema({
    name:String,
    data:String
})

const Friends = new mongoose.model("friends", FriendSchema)

module.exports = Friends