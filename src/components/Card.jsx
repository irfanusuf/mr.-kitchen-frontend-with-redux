import React from "react";
import { useSelector } from "react-redux";

const Card = () => {


  const count = useSelector(state => state.custom.count);
  return (
    <div>
    
      <h3>
      
        hi this is a single card
        <p> {count} </p>
      </h3>
    </div>
  );
};

export default Card;
