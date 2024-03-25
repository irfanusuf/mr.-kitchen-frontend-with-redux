import { configureStore } from "@reduxjs/toolkit";
import {
  getItemsReducer,
  getItemReducer,
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
    getItems: getItemsReducer,
    getItem: getItemReducer,
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



