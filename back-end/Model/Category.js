import mongoose from "mongoose";
const { Schema } = mongoose;

const Categroy = new Schema({
  name: String,
  itemId: [
    {
      type: ObjectId,
      ref: "Item",
    },
  ],
});
module.exports = mongoose.model("Category", Categroy);
