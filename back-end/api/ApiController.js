const Category = require("../Model/Category");
const Item = require("../Model/Item");
module.exports = {
  HomePage: async (req, res) => {
    try {
      const category = await Category.find().populate({
        path: "itemId",
        select: "_id name music description thumbnail",
      });
      return res.json({ category });
    } catch (error) {
      return res.json({ error });
    }
  },
  DetailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id });
      return res.status(200).json({ item });
    } catch (error) {
      return res.json({ error });
    }
  },
};
