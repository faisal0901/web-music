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
      console.log(error);
    }
  },
};
