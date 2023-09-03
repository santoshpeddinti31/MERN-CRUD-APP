const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  productname: String,
  sellername: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", dataSchema);

module.exports = Todo;
