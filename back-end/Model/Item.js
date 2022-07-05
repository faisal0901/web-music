const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String,
  music: String,
  categoryId: {
    type: ObjectId,
    ref: "Category",
  },
});
module.exports = mongoose.model("Item", ItemSchema);
