import React from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
 const dispatch =useDispatch()

const count = useSelector(state => state.custom.count);

  const minusHandler = () => {dispatch({ type: 'decrement' })};

  const plusHandler = () => {dispatch({ type: 'increment' })};
  


  return (
    <div>
      hi this is an app main componenet

      <Home/>
      <div>
        <button onClick={minusHandler}> minus </button>
        <p> {count}</p>
        <button onClick={plusHandler}> plus </button>{" "}
      </div>
    </div>
  );
};

export default App;
