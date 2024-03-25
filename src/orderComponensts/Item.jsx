import React, { useEffect, useState } from "react";
import "./Item.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../redux/actions";

const Item = () => {
  const { itemId } = useParams();
  const [showaddress, setShowAddress] = useState(false);
  const dispatch = useDispatch();

  const item = useSelector((state) => state.getItem.item); //redux useSelector

  useEffect(() => {
    dispatch(getItem(itemId));
  }, []);

  return (
    <div className="container-m">
      <h1> Order Your Food Now ! ..some Animation </h1>
      <div className="single-card">
        <div className="img">
          <img src={item && item.imageUrl} alt="no-preview" />
        </div>

        <div
          className={
            !showaddress
              ? "item-details animate__animated animate__slideInDown "
              : "no-item-details"
          }
        >
          <h1>{item && item.title}</h1>
          <span>
            {item && item.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum doloribus, perferendis, velit provident
            accusantium assumenda illum cum architecto, reiciendis ratione
            impedit iure! Quaerat iusto officia dicta iure nulla quam
            voluptatum!
          </span>

          <div className="price ">
            <b>Price per Serving : </b>
            <span>{item && item.price}</span>
          </div>

          <div className="qty">
            {" "}
            <button>-</button>
            <input type="number" />
            <button>+</button>
            <button
              onClick={() => {
                setShowAddress(!showaddress);
              }}
            >
              {" "}
              Buy
            </button>
          </div>

          <div className="liking">
            <b> Liked Last time Give us a thumbs up </b>
            <button>Like</button>
          </div>
        </div>

        <div
          className={
            showaddress
              ? "address animate__animated animate__slideInUp "
              : "no-address"
          }
        >
          <h1> Address</h1>
          <form>
            <label>
              Name
              <input />
            </label>
          </form>

          <button
            onClick={() => {
              setShowAddress(!showaddress);
            }}
          >
            {" "}
            back{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
