var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb://localhost:27017/db-music",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels(["./Model/Item", "./Model/Category"]);

    // Clear specified collections
    seeder.clearModels(["Item"], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function () {
        seeder.disconnect();
      });
    });
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Houses with beauty backyard",
        itemId: [{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") }],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        name: "Tabby Town",
        description: "Tabby Town",
        thumbnail: "Tabby Town",
        music: "Tabby Town",
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Seattle Rain
    ],
  },
  // end item
  // start image

  // end image
  // start feature
  // end feature
  // start activity

  // end activity

  // start booking

  // end booking

  // member
];
