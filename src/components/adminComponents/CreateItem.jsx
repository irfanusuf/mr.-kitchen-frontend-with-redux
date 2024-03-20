import React from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../../redux/actions";

const CreateItem = () => {
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createItem());
  };

  return (
    <div>
      <form>
        <label>Description</label>

        <input />

        <button onClick={handleCreate}> Create Item </button>
      </form>
    </div>
  );
};

export default CreateItem;
