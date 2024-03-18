import { createReducer } from "@reduxjs/toolkit";

export const customReducer = createReducer({ count: 10 }, (builder) => {
  builder
    .addCase("increment", (state) => {
      state.count = state.count + 1;
    })

    .addCase("decrement", (state) => {
      state.count = state.count - 1;
    });
});

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
  builder.addCase("postRequest", (state, action) => {
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
  builder.addCase("createItemRequest", (state) => {
    state.loading = true;
  })
  .addCase( "createItemSucess" , (state,action) =>{
    state.loading = false;
    state.message = action.message
  })
  .addCase( "createItemFailure" , (state,action) =>{
    state.loading = false;
    state.message = action.message
  })
});
