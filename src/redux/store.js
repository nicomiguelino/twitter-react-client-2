import { configureStore } from '@reduxjs/toolkit';
import tweetsReducer from './tweets/tweetsSlice.js';
import trendingTagsReducer from './trending/trendingTagsSlice';

export default configureStore({
  reducer: {
    tweets: tweetsReducer,
    trendingTags: trendingTagsReducer,
  }
});
