const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model('CartItem', CartItemSchema);
