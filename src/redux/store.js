import { configureStore } from "@reduxjs/toolkit";
import {customReducer , getPostsReducer} from './reducers'



const store = configureStore({


    reducer : {

        custom : customReducer,
        getPosts : getPostsReducer
    }
})






export default store











// import { configureStore } from "@reduxjs/toolkit";
// import customReducer from "./reducers";



// const store = configureStore({

//     reducer : {
//         custom : customReducer, 
//     }
// })




//     export default store 