import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

// Async thunk for user login
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/login', { email, password });
      try {
        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('userToken', data.token);
      } catch (storageError) {
        console.error('LocalStorage Error:', storageError);
      }
      return data;
    } catch (error) {
      const message = error.response?.data?.msg || 'Login failed. Please try again.';
      return rejectWithValue(message);
    }
  }
);

// Async thunk for user registration
export const register = createAsyncThunk(
  'user/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/register', { name, email, password });
      try {
        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('userToken', data.token);
      } catch (storageError) {
        console.error('LocalStorage Error:', storageError);
      }
      return data;
    } catch (error) {
      const message = error.response?.data?.msg || 'Registration failed. Please try again.';
      return rejectWithValue(message);
    }
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    isAdmin: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))?.isAdmin || false
      : false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      try {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userToken');
      } catch (storageError) {
        console.error('LocalStorage Error:', storageError);
      }
      state.userInfo = null;
      state.isAdmin = false;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isAdmin = action.payload?.isAdmin || false;
      try {
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      } catch (storageError) {
        console.error('LocalStorage Error:', storageError);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.isAdmin = action.payload?.isAdmin || false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.isAdmin = action.payload?.isAdmin || false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
