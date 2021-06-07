import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from 'utilities/apiClient';

const initialState = {
  isLoggedIn: false,
  displayName: '',
};

export const verifyIfLoggedIn = createAsyncThunk(
  'auth/verify',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/isLoggedIn');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const authSlice = createSlice({
  name:  'auth',
  initialState,
  extraReducers: {
    [verifyIfLoggedIn.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [verifyIfLoggedIn.fulfilled]: (state, action) => {
      const { displayName } = action.payload;
      state.isLoggedIn = true;
      state.displayName = displayName;
    },
    [verifyIfLoggedIn.rejected]: (state) => {
      state.isLoggedIn = false;
    }
  },
});

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
