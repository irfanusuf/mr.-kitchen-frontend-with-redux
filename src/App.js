import React from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import Post from "./components/Post";
import CreateItem from "./components/CreateItem";

const App = () => {
 const dispatch =useDispatch()



  


  return (
    <div>
          {/* landing page  */}
      <Home/>      


  
    </div>
  );
};

export default App;
