const express = require('express');

const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products/:productId', shopController.getProductById);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
