const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RememberMeSchema = new Schema({
  data: String,
  date: String,
});

const RememberMe = new mongoose.model("rememberme", RememberMeSchema);

module.exports = RememberMe;
