import { createReducer } from "@reduxjs/toolkit";


export const customReducer = createReducer({count :10}, (builder) =>{


 builder.addCase("increment" , (state)=>{
   state.count = state.count + 1
 })


 .addCase("decrement" ,  (state  )=>{
  state.count = state.count -1 
})
} )


export const getPostsReducer = createReducer({}, (builder)=>{
builder
.addCase("request" ,  (state ,action) =>{
  state.loading =true

})
.addCase("sucess" , (state ,action)=>{
  state.loading =false
  state.posts = action.dataPayload
  state.message =action.messagePayload
})
.addCase("failure" , (state ,action) =>{
  state.loading =false
  state.message =action.payload
})
.addCase("clearError" ,(state ,action)=>{

  state.message =null
})


})


















// const initialState = {
//   counter: 0
// };

// const customReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(INCREMENT, (state, action) => {
//       state.counter += 1;
//     })
//     .addCase(DECREMENT, (state, action) => {
//       state.counter -= 1;
//     });
// });


// export default customReducer;

