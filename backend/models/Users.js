// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // User Schema
// const userSchema = new mongoose.Schema(
//   {
//     userName: {
//       type: String,
//       required: [true, 'Username is required'],
//       minlength: [3, 'Username must be at least 3 characters long'],
//       maxlength: [30, 'Username cannot exceed 30 characters'],
//       unique: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       lowercase: true,
//       match: [
//         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         'Please provide a valid email address',
//       ],
//     },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//       minlength: [6, 'Password must be at least 6 characters long'],
//       select: false, // Prevent password from being returned in queries
//     },
//     role: {
//       type: String,
//       enum: ['user', 'admin', 'moderator'],
//       default: 'user',
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   // Only hash the password if it has been modified or is new
//   if (!this.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Compare passwords
// userSchema.methods.comparePassword = async function (inputPassword) {
//   try {
//     return await bcrypt.compare(inputPassword, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

