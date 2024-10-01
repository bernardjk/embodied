const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');

// Create a new product
router.post('/products', async (req, res) => {
    try {
      // Check if the request body is an array of products
      if (!Array.isArray(req.body)) {
        return res.status(400).json({ message: "Input should be an array of products." });
      }
  
      // Insert the array of products into the database using insertMany
      const products = await Product.insertMany(req.body);
      
      // Respond with the created products
      res.status(201).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product by ID
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
