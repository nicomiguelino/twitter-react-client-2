import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../utilities/apiClient';

const initialState = {
  accessToken: null,
  isLoggedIn: false,
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
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers: {
    [verifyIfLoggedIn.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [verifyIfLoggedIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
    },
    [verifyIfLoggedIn.rejected]: (state) => {
      state.isLoggedIn = false;
    }
  },
});

export const selectAuth = (state) => state.auth;

export const {
  setAccessToken,
  clearAccessToken,
} = authSlice.actions;

export default authSlice.reducer;
