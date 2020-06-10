const express = require('express');
const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
const CartController = require('../Controllers/CartController');

const router = express.Router();

router.get('/get', async (req, res) => {
  const cart = await Cart.findOne({});

  res.json(cart);
});

router.post('/add/', async (req, res) => {
  try {
    CartController.add(req.body.productId);
    const cart = await Cart.findOne({});

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

router.post('/remove/', async (req, res) => {
  try {
    CartController.remove(req.body.productId);
    const cart = await Cart.findOne({});

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

router.post('/decrement/', async (req, res) => {
  try {
    CartController.decrement(req.body.productId);
    const cart = await Cart.findOne({});

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

router.post('/favorite/', async (req, res) => {
  try {
    CartController.favorite(req.body.productId);
    const cart = await CartItem.findOne({ product: req.body.productId });

    res.json(cart);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
