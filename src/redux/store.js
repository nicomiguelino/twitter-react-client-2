import { configureStore } from '@reduxjs/toolkit';
import tweetsReducer from './tweets/tweetsSlice.js';
import trendingTagsReducer from './trending/trendingTagsSlice';
import authReducer from './auth/authSlice';

export default configureStore({
  reducer: {
    tweets: tweetsReducer,
    trendingTags: trendingTagsReducer,
    auth: authReducer,
  }
});
