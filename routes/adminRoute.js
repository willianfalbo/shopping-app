const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

// GET
router.get('/products', adminController.getProducts);

// GET
router.get('/add-product', adminController.getAddProduct);
// POST
router.post('/add-product', adminController.postAddProduct);

// GET
router.get('/edit-product/:productId', adminController.getEditProduct);
// POST
router.post('/edit-product', adminController.postEditProduct);

// POST
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
