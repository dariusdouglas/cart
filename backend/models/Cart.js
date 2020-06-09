const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CartItem',
    },
  ],
});

module.exports = mongoose.model('Cart', CartSchema);
