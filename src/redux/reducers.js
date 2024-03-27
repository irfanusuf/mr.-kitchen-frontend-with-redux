import { createReducer } from "@reduxjs/toolkit";



// done 
export const getItemsReducer = createReducer({}, (builder) => {
  builder
    .addCase("request", (state) => {
      state.loading = true;
    })
    .addCase("sucess", (state, action) => {
      state.loading = false;
      state.items = action.Payload;
      state.message = action.message;
    })
    .addCase("failure", (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase("clearError", (state) => {
      state.message = null;
    });
});
// done 
export const getItemReducer = createReducer({}, (builder) => {
  builder
  .addCase("postRequest", (state, action) => {
    state.loading = true;
  });

  builder.addCase("postSucess", (state, action) => {
    state.loading = false;
    state.item = action.payload;
    state.message = action.message;
  });

  builder.addCase("postFailure", (state, action) => {
    state.loading = false;
    state.message = action.message;
  });
});

// Admin Functions
export const createItemReducer = createReducer({}, (builder) => {
  builder
    .addCase("createItemRequest", (state) => {
      state.loading = true;
    })
    .addCase("createItemSucess", (state, action) => {
      state.loading = false;
      state.message = action.message;
      state.data = action.dataPayload
    })
    .addCase("createItemFailure", (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    // .addCase("clearmessages" , (state) =>{

    //   state.message = null
    // })
});


// user Functions    // done 
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
  // .addCase("clearmessages" , (state )=>{
  //   state.message = null
  // })
  
});
  // done 
export const loginReducer = createReducer({}, (builder) => {
  builder
  .addCase("loginRequest", (state, action) => {
    state.loading = true;
  })
  .addCase("loginSucess", (state ,action) =>{

    state.loading = false
    state.message = action.message
    state.token = action.token
  })
  .addCase("loginFailure" , (state ,action) =>{
    state.loading = false
    state.message = action.message
  })
  
});
export const forgotPassWordReducer = createReducer({}, (builder) => {
  builder
  .addCase("forgotRequest", (state) => {
    state.loading = true;
  })
  .addCase("forgotSucess", (state ,action) =>{

    state.loading = false
    state.message = action.message
  })
  .addCase("forgotFailure" , (state ,action) =>{
    state.loading = false
    state.message = action.message
  })
  .addCase ("clearErrors" , (state)=>{
    state.message = null
  })
  
});
export const updatePasswordReducer = createReducer({}, (builder)=>{

  builder.addCase("updatePassWordReq" , (state)=>{
    state.loading =true

  })
  .addCase ("updatePassSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("updatePassFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })
});
export const deleteUserReducer = createReducer({},(builder)=>{
  builder.addCase("delUserReq" , (state)=>{
    state.loading =true

  })
  .addCase ("delUserSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("delUserFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })


});
export const logoutUserReducer = createReducer({},(builder)=>{
  builder.addCase("logoutReq" , (state)=>{
    state.loading =true

  })
  .addCase ("logoutSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("logoutFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })
});
export const changePasswordReducer = createReducer({},(builder)=>{
  builder.addCase("changePassReq" , (state)=>{
    state.loading =true

  })
  .addCase ("ChangePassSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("changePassFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })
});
export const likePostReducer = createReducer({},(builder)=>{
  builder.addCase("likeReq" , (state)=>{
    state.loading =true

  })
  .addCase ("likeSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("likeFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })
});
export const unlikePostReducer = createReducer({},(builder)=>{
  builder.addCase("unlikeReq" , (state)=>{
    state.loading =true

  })
  .addCase ("unlikeSucess" ,(state , action)=>{
    state.loading = false
    state.message = action.message
    state.payload = action.payload

  })
  .addCase("unlikeFailure" , (state ,action)=>{
    state.loading = false
    state.message = action.message
  })
  .addCase("clearErrors" ,(state)=>{
    state.message =null
  })
});
