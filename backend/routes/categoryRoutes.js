// const express = require('express');
// const router = express.Router();
// const {
//   createCategory,
//   getCategories,
//   updateCategory,
//   deleteCategory,
// } = require('../controllers/categoryController');

// // Create a category
// router.post('/', createCategory);

// // Get all categories
// router.get('/', getCategories);

// // Update a category
// router.put('/:id', updateCategory);

// // Delete a category
// router.delete('/:id', deleteCategory);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

// Create a new category
router.post('/', createCategory);

// Get all categories
router.get('/', getCategories);

// Update a category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;

