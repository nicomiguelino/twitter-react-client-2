import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../utilities/apiClient';

export const maxCharPerTweet = 200;

const initialState = {
  inputTweet: '',
  charactersLeft: maxCharPerTweet,
  tweetButtonDisabled: true,
  createTweetLoading: false,
  tweetsLoading: true,
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
  async (accessToken, thunkAPI) => {
    try {
      const response = await apiClient.get('/tweets', {
        headers: {
          authorization: `Bearer ${accessToken}`
        },
      })
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
      state.tweetsLoading = true;
    },
    [getTweets.fulfilled]: (state, action) => {
      state.list = [...action.payload];
      state.tweetsLoading = false;
    }
  }
});

export const {
  setInputTweet ,
  setTweetButtonDisabled,
  updateCharactersLeft,
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
