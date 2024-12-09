import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

// Async thunk for user registration
export const registerUserAction = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', formData, {
        withCredentials: true, 
      });
      return response.data;
    } catch (error) {
      // Handle cases where error.response may be undefined
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = true; // User is authenticated after successful registration
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        console.error(action.payload); // Log error for debugging
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
