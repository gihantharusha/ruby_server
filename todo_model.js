const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todo: String,
  date: String,
  finish: Boolean,
});

const Todo = new mongoose.model("todos", TodoSchema);

module.exports = Todo;
