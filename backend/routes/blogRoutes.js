const express = require('express');
const { createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost } = require('../controllers/blogController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Routes for blog posts
router.route('/').post(protect, admin, createBlogPost).get(getBlogPosts);
router.route('/:id').put(protect, admin, updateBlogPost).delete(protect, admin, deleteBlogPost);

module.exports = router;
