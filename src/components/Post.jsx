import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/actions";

const Post = () => {
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getItems("65ec02d266782fdad93f7772"));
  }, [dispatch]);

  const data = useSelector((state) => state.getPost);

  return <div></div>;
};

export default Post;
