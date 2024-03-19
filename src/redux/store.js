import { configureStore } from "@reduxjs/toolkit";
import {
  getPostsReducer,
  getPostReducer,
  createItemReducer,
  registerReducer,
  loginReducer,
  forgotPassWordReducer,
  updatePasswordReducer,
  deleteUserReducer,
  logoutUserReducer,
  changePasswordReducer,
  likePostReducer,
  unlikePostReducer

} from "./reducers";

const store = configureStore({
  reducer: {
    getPosts: getPostsReducer,
    getpost: getPostReducer,
    createItem: createItemReducer,
    register : registerReducer ,
    login : loginReducer,
    forgotPassWord : forgotPassWordReducer,
    updatePassword : updatePasswordReducer,
    deleteUser: deleteUserReducer ,
    logoutUser : logoutUserReducer ,
    changePassword : changePasswordReducer,
    likepost : likePostReducer ,
    unlikePost :unlikePostReducer ,

  },
});

export default store;



