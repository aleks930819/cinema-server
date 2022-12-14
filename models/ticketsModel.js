const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    
    count: {
      type: Number,
      required: true,

    },

    total: {
      type: Number,
      required: true,

    },

    movieId: {
      type: String,
      required: true,

    },
  },
  {
    timestamps: true,
  }
);

const Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;
