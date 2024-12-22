import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/categories';

// Fetch all categories
export const fetchCategories = createAsyncThunk('category/fetchAll', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add a new category
export const addCategory = createAsyncThunk('category/add', async (categoryData) => {
  const response = await axios.post(API_URL, categoryData);
  return response.data;
});

// Update a category
export const updateCategory = createAsyncThunk('category/update', async ({ id, updates }) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  return response.data;
});

// Delete a category
export const deleteCategory = createAsyncThunk('category/delete', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Toggle visibility of a category
export const toggleCategoryVisibility = createAsyncThunk(
  'category/toggleCategoryVisibility',
  async ({ id, visible }) => {
    const response = await axios.put(`${API_URL}/${id}`, { visible: !visible });
    return response.data;
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add category
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      // Update category
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex((cat) => cat._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      // Delete category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((cat) => cat._id !== action.payload);
      })
      // Toggle visibility
      .addCase(toggleCategoryVisibility.fulfilled, (state, action) => {
        const index = state.categories.findIndex((cat) => cat._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      });
  },
});

export default categorySlice.reducer;
