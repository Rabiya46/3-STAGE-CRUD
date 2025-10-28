import { createSlice } from "@reduxjs/toolkit";
import { POSTS_THUNK } from "./postsThunk";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(POSTS_THUNK.getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(POSTS_THUNK.getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;

        console.log(action);
      })
      .addCase(POSTS_THUNK.getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      //   get by id
      .addCase(POSTS_THUNK.getPostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(POSTS_THUNK.getPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(POSTS_THUNK.getPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      // post
      .addCase(POSTS_THUNK.addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(POSTS_THUNK.addPost.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(POSTS_THUNK.addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error == action.error;
      })

      // delete
      .addCase(POSTS_THUNK.deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(POSTS_THUNK.deletePost.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(POSTS_THUNK.deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error == action.error;
      })

      // put
      .addCase(POSTS_THUNK.updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(POSTS_THUNK.updatePost.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(POSTS_THUNK.updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error == action.error;
      });
  },
});

export { postsSlice };
