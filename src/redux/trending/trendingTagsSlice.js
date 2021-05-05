import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  'ShopeeCashbackTuesday',
  'LazadaBirthdaySale',
  'LazadaBigBrandsSale',
  'OctagonPHChristmasSale',
];

export const trendingTagsSlice = createSlice({
  name: 'trendingTags',
  initialState,
  reducers: {},
});

export default trendingTagsSlice.reducer;
