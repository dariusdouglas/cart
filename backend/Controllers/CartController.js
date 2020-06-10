const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

module.exports.add = async (productId) => {
  const cart = await Cart.findOne({ _id: '5edfe51b7524ced3b52bdb98' });

  try {
    const cartItem = await CartItem.findOne({ product: productId });
    cartItem.quantity += 1;
    cartItem.save();

    return cartItem;
  } catch (err) {
    const product = await Product.findOne({ _id: productId });
    const cartItem = new CartItem({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      favorite: false,
    });

    await cartItem.save();
    cart.items.push(cartItem);
    await cart.save();

    return cartItem;
  }
};

module.exports.decrement = async (productId) => {
  const cartItem = await CartItem.findOne({ product: productId });
  if (cartItem.quantity > 0) {
    cartItem.quantity -= 1;
    cartItem.save();
  }
};

module.exports.favorite = async (productId) => {
  const cartItem = await CartItem.findOne({ product: productId });
  cartItem.favorite = !cartItem.favorite;
  cartItem.save();
};

module.exports.remove = async (productId) => {
  const cart = await Cart.findOne({ _id: '5edfe51b7524ced3b52bdb98' });
  const cartItem = await CartItem.findOneAndRemove({ product: productId });

  // cartItem.remove();

  const itemIndexInCart = cart.items.findIndex((item) => item.equals(cartItem._id));
  console.log('module.exports.remove -> itemIndexInCart', itemIndexInCart);
  if (itemIndexInCart > -1) {
    cart.items.splice(itemIndexInCart, 1);
    cart.save();
  }
};
