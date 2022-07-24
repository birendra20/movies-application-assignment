const express = require("express");

const Movie = require("../models/movie.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    let movies = await Movie.find().lean().exec();
    return res.status(200).send(movies);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).lean().exec();

    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
