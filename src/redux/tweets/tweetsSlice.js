import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const maxCharPerTweet = 200;

const initialState = {
  inputTweet: '',
  charactersLeft: maxCharPerTweet,
  tweetButtonDisabled: true,
  createTweetLoading: false,
  list: []
};

export const createTweet = createAsyncThunk(
  'tweets/create',
  async (tweet) => {
    const response = await new Promise(resolve =>
      setTimeout(() => resolve({ data: tweet }), 2000)
    );

    return response.data;
  }
);

export const getTweets = createAsyncThunk(
  'tweets/get',
  async (_, thunkAPI) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await axios.get('http://localhost:4000/tweets')
      return response.data;
    } catch(error) {
      return thunkAPI.rejectWithValue({
        error: error.message
      });
    }
  }
);

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setInputTweet: (state, action) => {
      state.inputTweet = action.payload;
    },
    setTweetButtonDisabled: (state, action) => {
      state.tweetButtonDisabled = action.payload;
    },
    updateCharactersLeft: (state) => {
      state.charactersLeft = maxCharPerTweet -
        `${state.inputTweet}`.trim().length;
    },
  },
  extraReducers: {
    [createTweet.pending]: (state) => {
      state.createTweetLoading = true;
    },
    [createTweet.fulfilled]: (state, action) => {
      state.list.unshift(action.payload);
      state.createTweetLoading = false;
      state.inputTweet = '';
      state.charactersLeft = maxCharPerTweet;
    },
    [getTweets.pending]: (state) => {
    },
    [getTweets.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const {
  setInputTweet ,
  setTweetButtonDisabled,
  updateCharactersLeft,
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
