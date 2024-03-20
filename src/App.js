import React from "react";
import Home from "./components/sharedComponents/Home";
import { useDispatch, useSelector } from "react-redux";
// import Post from "./components/Post";
// import CreateItem from "./components/CreateItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";
import Login from "./components/userComponents/Login"
import Register from "./components/userComponents/Register"
import AllPosts from "./components/orderComponents/AllPosts"
import Contact from "./components/sharedComponents/Contact"


const App = () => {
  const dispatch = useDispatch()

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/items' element={<AllPosts />}/>

      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
