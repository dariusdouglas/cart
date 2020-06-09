const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

// const Product = require('./models/Product');
// const Cart = require('./models/Cart');
// const CartIem = require('./models/CartItem');
// const CartController = require('./Controllers/CartController');

// const doStuff = async () => {
//   const product = await Product.findOne({ _id: '5edfe0fcaa657ed207492d37' });

//   CartController.remove(product._id);
//   //   console.log('product', product._doc);

//   //   const cart = new Cart({ amount: 0, items: [] });

//   //   const cartItem = new CartIem({
//   //     product: product._id,
//   //     name: product.name,
//   //     price: product.price,
//   //     image: product.image,
//   //     quantity: 1,
//   //     favorite: false,
//   //   });
//   //   //   await cartItem.save();

//   //   cart.items.push(cartItem);
//   //   await cart.save();
// };

// doStuff();
const db = config.get('mongoURI');

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

const port = 8000;
app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));
