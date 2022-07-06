var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  process.env.DATABASE_URL,
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
        name: "Deep Focus music",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        name: "Study & Coding Beats ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        thumbnail: "https://placeimg.com/640/480/any",
        music:
          "https://firebasestorage.googleapis.com/v0/b/music-app-ffe83.appspot.com/o/music%2F15%20minutes%20of%20Concentration%20Music.%20Calming%20focus%20music%20to%20help%20with%20revision%20and%20study..mp3?alt=media&token=d4c3c00a-35f0-400d-b5c7-108840abafe9",
        categoryId: "5e96cbe292b97300fc901111",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        name: "Music For Studying, Concentration and Work ",
        description:
          "This relaxing music to study combines soothing ambient music with beautiful nature images, so you can play in the background while you focus on your exams.",
        thumbnail: "https://placeimg.com/640/480/any",
        music:
          "https://firebasestorage.googleapis.com/v0/b/music-app-ffe83.appspot.com/o/music%2F15%20minutes%20of%20Concentration%20Music.%20Calming%20focus%20music%20to%20help%20with%20revision%20and%20study..mp3?alt=media&token=d4c3c00a-35f0-400d-b5c7-108840abafe9",
        categoryId: "5e96cbe292b97300fc901111",
      },
    ],
  },
];
