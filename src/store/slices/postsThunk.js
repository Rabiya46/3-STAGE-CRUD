import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all
const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",

  async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

// get by id
const getPostById = createAsyncThunk(
  "posts/getPostById",

  async ({ id }) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      //   navigate(`/post/${id}`);

      return data;
    } catch (eroor) {
      console.error(eroor.message);
    }
  }
);

// post
const addPost = createAsyncThunk(
  "posts/addPost",

  async ({ data, reset }, { dispatch, rejectWithValue }) => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", data);

      reset();

      dispatch(getAllPosts());
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// delete
const deletePost = createAsyncThunk(
  "posts/deletePost",

  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      dispatch(getAllPosts());
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

//put
const updatePost = createAsyncThunk(
  "posts/updatePost",

  async ({ data, id }, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);

      dispatch(getAllPosts());
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const POSTS_THUNK = {
  getAllPosts,
  getPostById,
  addPost,
  deletePost,
  updatePost,
};
