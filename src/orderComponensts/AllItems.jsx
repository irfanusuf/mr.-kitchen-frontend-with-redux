import React, { useEffect, useState } from "react";
import "./AllItems.scss";
import { ToastContainer } from "react-toastify";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import getAllItems from "../redux/actions";

import IsAuthenticated from "../authorization/auth";
import Loader from "../sharedComponents/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AllItems = () => {
  IsAuthenticated();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getItems.loading);

  const items = useSelector((state) => state.getItems.items);

  // const message = useSelector((state) => state.getPosts.message);
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);
  const [noItem, setNoItem] = useState("");

  useEffect(() => {
    dispatch(getAllItems());
    if (items && items.length === 0) {
      setNoItem("No Items are Available");
    }
  }, [dispatch]);

// toast.success(message)



  const handleLike = () => {
    setLike(!like);
  };

  const handleDislike = () => {
    setDislike(!dislike);
  };

  return (
    <>
      <ToastContainer />

      <div className="all-items">
        {loading ? (
          <Loader className="spinner" />
        ) : (
          <div className="cards">
            {noItem && <div className="no-item"> {noItem}</div>}

            {items &&
              items.map((item) => (
                <div className="card">
                  <Link key={item.id} to={`/items/${item._id}`}>
                    {" "}
                    <img src={item.imageUrl} alt="no-preview" />{" "}
                  </Link>
                  <div className="details">
                    {" "}
                    <span>{item.title}</span>
                    <h4>{item.description}</h4>
                    <div className="icons">
                      <span onClick={handleLike}>
                        {like ? (
                          <BiSolidLike />
                        ) : (
                          <BiSolidLike style={{ color: "green" }} />
                        )}
                      </span>
                      <span onClick={handleDislike}>
                        {dislike ? (
                          <BiSolidDislike />
                        ) : (
                          <BiSolidDislike style={{ color: "red" }} />
                        )}
                      </span>
                    </div>
                    <div className="counts">
                      <span>{item.likes && item.likes.length}</span>
                      <span>{item.unlikes && item.unlikes.length}</span>
                    </div>
                    <span>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllItems;
