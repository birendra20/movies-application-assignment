const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://birendra:masai123@cluster0.4bqs3.mongodb.net/movieApp?retryWrites=true&w=majority"
  );
};
