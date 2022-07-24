const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    Image: { type: String, require: true },
    Name: { type: String, require: true },
    Title: { type: String, require: true },
    Rating: { type: Number, require: true },
    Category: { type: String, require: true },
    Price: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("movie", moviesSchema);
