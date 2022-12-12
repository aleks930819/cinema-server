const asyncHandler = require('express-async-handler');
const Movie = require('../models/movieModel');



const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({});

  res.json(movies);
});


const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  

  module.exports = {
    getMovies,
    getMovieById
  }