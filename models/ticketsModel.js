const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
   
    userName: {
        type: String,
        required: true,
    },
    
    count: {
      type: Number,
      required: true,

    },

    total: {
      type: Number,
      required: true,

    },

   
    movieName:{
      type: String,
      required: true,

    }
  },
  {
    timestamps: true,
  }
);

const Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;
