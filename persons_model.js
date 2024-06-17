const mongoose = require("mongoose");

const PersonsSchema = new mongoose.Schema({
  name: String,
  data: String
});

const Persons = new mongoose.model("persons", PersonsSchema);

module.exports = Persons;
