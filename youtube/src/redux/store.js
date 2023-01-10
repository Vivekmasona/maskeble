import { configureStore } from '@reduxjs/toolkit';
import videosSlice from './videos/videos-slice';

const store = configureStore({
  reducer: {
    videos: videosSlice,
  },
});

export default store;
