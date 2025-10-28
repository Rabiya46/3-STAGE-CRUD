import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    [postsSlice.name]: postsSlice.reducer,
  },
});

export default store;
