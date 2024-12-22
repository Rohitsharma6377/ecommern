import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import adminReducer from './adminSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    admin: adminReducer,
    order: orderReducer,
    category: categoryReducer,  // Changed from 'categories' to 'category'
  },
});
