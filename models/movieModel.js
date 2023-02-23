const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    runtime:{
      type:String,
      required:true
    },


    poster: {
      type: String,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },

    overview: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    price : {
      type: Number,
      required:true,
    }

   
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
