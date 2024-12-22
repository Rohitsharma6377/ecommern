const BlogPost = require('../models/blogPostModel');

// @desc    Create a new blog post
// @route   POST /api/blog
// @access  Private/Admin
const createBlogPost = async (req, res) => {
    const { title, content } = req.body;

    const blogPost = new BlogPost({
        title,
        content,
        author: req.user._id,
    });

    const createdBlogPost = await blogPost.save();
    res.status(201).json(createdBlogPost);
};

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
const getBlogPosts = async (req, res) => {
    const blogPosts = await BlogPost.find().populate('author', 'name');
    res.json(blogPosts);
};

// @desc    Update a blog post
// @route   PUT /api/blog/:id
// @access  Private/Admin
const updateBlogPost = async (req, res) => {
    const { title, content } = req.body;

    const blogPost = await BlogPost.findById(req.params.id);

    if (blogPost) {
        blogPost.title = title;
        blogPost.content = content;

        const updatedBlogPost = await blogPost.save();
        res.json(updatedBlogPost);
    } else {
        res.status(404);
        throw new Error('Blog post not found');
    }
};

// @desc    Delete a blog post
// @route   DELETE /api/blog/:id
// @access  Private/Admin
const deleteBlogPost = async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id);

    if (blogPost) {
        await blogPost.remove();
        res.json({ message: 'Blog post removed' });
    } else {
        res.status(404);
        throw new Error('Blog post not found');
    }
};

module.exports = {
    createBlogPost,
    getBlogPosts,
    updateBlogPost,
    deleteBlogPost,
};
