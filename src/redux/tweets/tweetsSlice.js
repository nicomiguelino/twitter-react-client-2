import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const maxCharPerTweet = 200;

const initialState = {
  inputTweet: '',
  charactersLeft: maxCharPerTweet,
  tweetButtonDisabled: true,
  createTweetLoading: false,
  list: [
    {
      userName: 'anthonyedwardstark',
      displayName: 'Tony Stark',
      timeElapsed: '4h',
      content: 'Time to upgrade my Mark V.',
    },
    {
      userName: 'peterparker',
      displayName: 'Peter Parker',
      timeElapsed: '23s',
      content: 'I\'m super excited on my first day at the Stark internship.',
    },
    {
      userName: 'brucebanner',
      displayName: 'Hulk',
      timeElapsed: '4h',
      content: 'Gotta go to dinner date with Nat.',
    },
    {
      userName: 'samwilson',
      displayName: 'The Falcon',
      timeElapsed: '1d',
      content: 'Gotta go fast to get that shield back.',
    },
  ]
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
  },
});

export const {
  setInputTweet ,
  setTweetButtonDisabled,
  updateCharactersLeft,
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
