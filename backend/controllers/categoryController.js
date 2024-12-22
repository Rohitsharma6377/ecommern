const Category = require('../models/categoryModel');

// // Create a new category
// const createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     if (!name) {
//       return res.status(400).json({ message: 'Category name is required' });
//     }

//     const category = new Category({ name, description });
//     await category.save();

//     res.status(201).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get all categories
// const getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a category
// const updateCategory = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     const category = await Category.findById(id);
//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     category.name = name || category.name;
//     category.description = description || category.description;

//     await category.save();

//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a category
// const deleteCategory = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const category = await Category.findByIdAndDelete(id);
//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     res.json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { createCategory, getCategories, updateCategory, deleteCategory };


// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
