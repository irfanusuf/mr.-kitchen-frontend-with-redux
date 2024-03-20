import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/actions";
import './Home.scss'

const Home = () => {
  const dispatch =useDispatch()

   // retreiving data from store 
  const data = useSelector((state) => state.getPosts);   
  console.log(data);

  useEffect(() => {
    // dispatching action getAllitems which is stored in actions.js file in redux folder 
    dispatch(getAllItems());        
  }, [dispatch]);

  return (
    <div className="home">


      <h1> Hi this is Mr Kitchen</h1>

     
    </div>
  );
};

export default Home;
