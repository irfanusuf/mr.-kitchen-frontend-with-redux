import { createReducer } from "@reduxjs/toolkit";
import  {INCREMENT ,DECREMENT }  from './actions'


const intialState ={
  count : 10
}


const customReducer = createReducer(intialState, (builder) =>{


 builder.addCase(INCREMENT , (state , action )=>{
   state.count = state.count + 1
 })


 .addCase(DECREMENT ,  (state , action )=>{
  state.count = state.count -1 
})



} )



export default customReducer











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

