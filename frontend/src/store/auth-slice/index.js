import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

// Async thunk for user registration
export const registerUserAction = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      // Handle cases where error.response may be undefined
      return rejectWithValue(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  }
);

// Async thunk for user login
export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      // Handle cases where error.response may be undefined
      return rejectWithValue(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload; // Set to true if user is present
      state.error = null; // Clear any existing error
    },
    clearError: (state) => {
      state.error = null; // Clear the error state
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false; // Reset authentication
      state.error = null; // Clear any existing error
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUserAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null; // Clear any errors
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload; // Set error message
      })
      // Login User
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null; // Clear any errors
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload; // Set error message
      });
  },
});

export const { setUser, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
