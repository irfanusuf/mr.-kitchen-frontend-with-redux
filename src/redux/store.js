import { configureStore } from "@reduxjs/toolkit";
import {
  customReducer,
  getPostsReducer,
  getPostReducer,
  createItemReducer,
} from "./reducers";

const store = configureStore({
  reducer: {
    custom: customReducer,
    getPosts: getPostsReducer,
    getpost: getPostReducer,
    createItem: createItemReducer,
  },
});

export default store;



