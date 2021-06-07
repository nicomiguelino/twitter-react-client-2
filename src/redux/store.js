import { configureStore } from '@reduxjs/toolkit';

import tweetsReducer from 'redux/tweets/tweetsSlice.js';
import trendingTagsReducer from 'redux/trending/trendingTagsSlice';
import authReducer from 'redux/auth/authSlice';

export default configureStore({
  reducer: {
    tweets: tweetsReducer,
    trendingTags: trendingTagsReducer,
    auth: authReducer,
  }
});
