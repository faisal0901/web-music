const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String,
  music: String,
});
module.exports = mongoose.model("Item", ItemSchema);
