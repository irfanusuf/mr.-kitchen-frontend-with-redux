import { createReducer } from "@reduxjs/toolkit";

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
  counter: 0
};

const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(INCREMENT, (state, action) => {
      state.counter += 1;
    })
    .addCase(DECREMENT, (state, action) => {
      state.counter -= 1;
    });
});

export { INCREMENT, DECREMENT }; 
export default customReducer;

