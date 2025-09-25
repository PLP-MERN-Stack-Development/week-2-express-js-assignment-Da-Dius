const express = require('express');
const { createProduct, getAllProducts, getProductbyID, updateProduct, deleteProduct } = require('../controllers/products.js');
const router = express.Router();
const { productValidationRules, validateProduct } = require('../middleware/validateProduct.js')

// List all products
router.get('/', getAllProducts);

// Create a new product
router.post('/', createProduct);

// Get a specific product by ID
router.get('/:id', getProductbyID);

// Update a product
router.patch('/:id',
    productValidationRules(),
    validateProduct,
    updateProduct
  );

// Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
