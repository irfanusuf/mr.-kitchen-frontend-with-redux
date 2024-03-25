import React, { useState } from "react";
import "./CreateItem.scss";
import Loader from "../sharedComponents/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../redux/actions";

const CreateItem = () => {
  const dispatch = useDispatch();
 // fetching data from store .....createItem
  const loading = useSelector((state) => state.createItem.loading);
  const message = useSelector((state) => state.createItem.message);
  const data = useSelector((state) => state.createItem.data);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0]; // selected files in the array of files
    const Reader = new FileReader(); //  creating instance of fileReader   // inheritance
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("image", image);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem(formData));

    if(message === "Item saved!" ){
      toast.success("Item Saved Sucessfully")
    } else{
      toast.error(message);
    }
    
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <div className="item-form">
        <form>
          <h1>Create an item for Sale</h1>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title of the product here  "
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label>Product Image </label>
          <input
            type="file"
            placeholder="Upload Pic "
            name="image"
            accept="image/*"
            onChange={handleImage}
          />

          <img src={image} alt="no-preview" width={100} />

          <label> Description of the Product</label>
          <input
            type="text"
            placeholder="Enter Description of Product here"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label> Price of the Product</label>
          <input
            type="text"
            placeholder="Enter Price of product here"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <button type="submit" onClick={handleSubmit} disabled={loading}>
            {" "}
            Submit{" "}
          </button>
        </form>

        <div className="item">
          {loading ? (
            <Loader />
          ) : (
            <div className="card">
              <img src={data && data.imageUrl} alt="no-preview" width={300} />
              <span>{data && data.title}</span>
              <span>{data && data.description}</span>
              <span>{data && data.price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
