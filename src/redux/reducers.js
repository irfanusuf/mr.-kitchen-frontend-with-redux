import { createReducer } from "@reduxjs/toolkit";

export const getPostsReducer = createReducer({}, (builder) => {
  builder
    .addCase("request", (state, action) => {
      state.loading = true;
    })
    .addCase("sucess", (state, action) => {
      state.loading = false;
      state.posts = action.dataPayload;
      state.message = action.messagePayload;
    })
    .addCase("failure", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("clearError", (state, action) => {
      state.message = null;
    });
});

export const getPostReducer = createReducer({}, (builder) => {
  builder
  .addCase("postRequest", (state, action) => {
    state.loading = true;
  });

  builder.addCase("postSucess", (state, action) => {
    state.loading = false;
    state.data = action.data;
    state.message = action.message;
  });

  builder.addCase("postFailure", (state, action) => {
    state.loading = false;
    state.message = action.message;
  });
});

export const createItemReducer = createReducer({}, (builder) => {
  builder
    .addCase("createItemRequest", (state) => {
      state.loading = true;
    })
    .addCase("createItemSucess", (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase("createItemFailure", (state, action) => {
      state.loading = false;
      state.message = action.message;
    });
});

export const registerReducer = createReducer({}, (builder) => {
  builder
  .addCase("registerRequest", (state, action) => {
    state.loading = true;
  })
  .addCase("registerSucess", (state ,action) =>{

    state.loading = false
    state.message = action.payload
  })
  .addCase("registerFailure" , (state ,action) =>{
    state.loading = false
    state.message = action.payload
  })
  
});

export const loginReducer = createReducer({}, (builder) => {
  builder
  .addCase("loginRequest", (state, action) => {
    state.loading = true;
  })
  .addCase("loginSucess", (state ,action) =>{

    state.loading = false
    state.message = action.payload
  })
  .addCase("loginFailure" , (state ,action) =>{
    state.loading = false
    state.message = action.payload
  })
  
});

export const forgotPassWordReducer = createReducer({}, (builder) => {
  builder
  .addCase("forgotRequest", (state, action) => {
    state.loading = true;
  })
  .addCase("forgotSucess", (state ,action) =>{

    state.loading = false
    state.message = action.payload
  })
  .addCase("forgotFailure" , (state ,action) =>{
    state.loading = false
    state.message = action.payload
  })
  
});








export const updatePasswordReducer = createReducer({}, (builder)=>{});
export const deleteUserReducer = createReducer({},(builder)=>{});
export const logoutUserReducer = createReducer({},(builder)=>{});
export const changePasswordReducer = createReducer({},(builder)=>{});
export const likePostReducer = createReducer({},(builder)=>{});
export const unlikePostReducer = createReducer({},(builder)=>{});
