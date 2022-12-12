const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

const users = require('./data/users');
const movies = require('./data/movies');
const cinema = require('./data/cinemas');

const User = require('./models/userModel');
const Movie = require('./models/movieModel');
const Cinema = require('./models/cinemasModel');
const cinemas = require('./data/cinemas');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Movie.deleteMany();
    await User.deleteMany();
    await Cinema.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleMovies = movies.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    const sampleCinemas = cinemas.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Cinema.insertMany(sampleCinemas);
    await Movie.insertMany(sampleMovies);

    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const deletetData = async () => {
  try {
    await Movie.deleteMany();
    await User.deleteMany();

    console.log('Data deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === 'd') {
  deletetData();
} else {
  importData();
}
