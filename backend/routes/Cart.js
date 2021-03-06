const express = require('express');
const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
const CartController = require('../Controllers/CartController');

const router = express.Router();

router.get('/get', async (req, res) => {
  const cart = await Cart.findOne({});
  const cartItems = await CartItem.find({});

  res.json({ ...cart._doc, items: cartItems });
});

router.post('/add/', async (req, res) => {
  try {
    await CartController.add(req.body.productId);
    const cart = await Cart.findOne({});
    const cartItems = await CartItem.find({});

    res.json({ ...cart._doc, items: cartItems });
  } catch (err) {
    res.send(err);
  }
});

router.post('/remove/', async (req, res) => {
  try {
    await CartController.remove(req.body.productId);
    const cart = await Cart.findOne({});

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

router.post('/decrement/', async (req, res) => {
  try {
    await CartController.decrement(req.body.productId);
    const cart = await Cart.findOne({});

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

router.post('/favorite/', async (req, res) => {
  try {
    await CartController.favorite(req.body.productId);
    const cart = await Cart.findOne({});
    const cartItems = await CartItem.find({});

    res.json({ ...cart._doc, items: cartItems });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
