const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProducts);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
