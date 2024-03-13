import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import './App.css'; // You can import your CSS file here if needed

const App = () => {
  const counter = useSelector(state => state.custom.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
