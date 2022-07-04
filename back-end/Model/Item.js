import mongoose from "mongoose";
const { Schema } = mongoose;

const Item = new Schema({
  name: String,
  description: String,
  thumbnail: String,
  music: String,
});
module.exports = mongoose.model("Category", Item);
