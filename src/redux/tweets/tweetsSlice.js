import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    createTweet: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { createTweet } = tweetsSlice.actions;

export default tweetsSlice.reducer;
