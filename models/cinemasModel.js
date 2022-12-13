const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    
    city: {
      type: String,
      required: true,

    },

    location: {
      type: String,
      required: true,

    },

    name: {
      type: String,
      required: true,

    },

    features: {
      type: String,
      required: true,

    },

    phone: {
      type: String,
      required: true,
    },

    imgUrl: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;
