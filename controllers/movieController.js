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
    res.status(404).json({ message: 'Movie not found' });
  }
});

const deleteMovieById = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    await movie.remove();
    res.status(204).json({ message: 'Movie removed successfully' });
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

const updateMovieById = asyncHandler(async (req, res) => {
  const { title, director, runtime, actors, poster, overview, rating, price } =
    req.body;

  const movie = await Movie.findById(req.params.id);

  if (movie) {
    movie.title = title;
    movie.director = director;
    movie.runtime = runtime;
    movie.actors = actors;
    movie.poster = poster;
    movie.overview = overview;
    movie.rating = rating;
    movie.price = price;

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } else {
    res.status(404);
    throw new Error('Movie not found');
  }
});

const addMovie = asyncHandler(async (req, res) => {
  const { title, director, runtime, actors, poster, overview, rating, price} =
    req.body;

  const movie = new Movie({
    title: title,
    poster: poster,
    director: director,
    overview: overview,
    rating: rating,
    price: price,
    runtime: runtime,
    actors: actors,
    user: req.user._id,
  });

  // const movie = await new Movie({
  //   title,
  //   director,
  //   runtime,
  //   actors,
  //   poster,
  //   overview,
  //   rating,
  //   price

  // });

  const createdMovie = await movie.save();
  res.status(201).json(createdMovie);
});

const reviewMovie = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const movie = await Movie.findById(req.params.id);

  if (movie) {
    const alreadyReviewed = movie.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Movie is already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    movie.reviews.push(review);

    movie.numReviews = movie.reviews.length

    movie.rating = movie.reviews.reduce((acc,item) => item.rating + acc,0) / movie.reviews.length;
    await movie.save();
    res.status(201).json({
      message:'Review was successfully added'
    })
  } else {
    res.status(404)
  }
});

module.exports = {
  getMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
  addMovie,
  reviewMovie
};
