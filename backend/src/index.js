const express = require("express");
var cors = require("cors");

const connect = require("./configs/db");
const movieController = require("./controllers/movie.controller");

const port = process.env.PORT || 2345;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/movies", movieController);

app.listen(port, async function () {
  try {
    await connect();

    console.log("listening to port 2345");
  } catch (error) {
    console.log("error is ", error.message);
  }
});
