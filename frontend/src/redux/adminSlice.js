import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'admin/fetchUsers',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userInfo.token,
        },
      };
      const { data } = await axios.get('/api/users', config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'admin/updateUser',
  async ({ userId, userData }, { getState, rejectWithValue }) => {
    try {
      const { user: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userInfo.token,
        },
      };
      const { data } = await axios.put(`/api/users/${userId}`, userData, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'admin/addProduct',
  async (productData, { getState, rejectWithValue }) => {
    try {
      const { user: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userInfo.token,
        },
      };
      const { data } = await axios.post('/api/products', productData, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'admin/updateProduct',
  async ({ productId, productData }, { getState, rejectWithValue }) => {
    try {
      const { user: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userInfo.token,
        },
      };
      const { data } = await axios.put(`/api/products/${productId}`, productData, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    loading: false,
    error: null,
    totalProducts: 0,
    totalRevenue: 0,
  },
  reducers: {
    setTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    },
    setTotalRevenue: (state, action) => {
      state.totalRevenue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        );
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.totalProducts += 1;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        // Update product in state if needed
      });
  },
});

export const { setTotalProducts, setTotalRevenue } = adminSlice.actions;

export default adminSlice.reducer;

