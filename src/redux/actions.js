import axios from "axios";

export const getAllItems = () => async (action) => {
  try {
    action({
      type: "request",
    });

    const { data } = await axios.get("/allItems");

    action({
      type: "sucess",
      messagePayload: data.message,
      dataPayload: data,
    });
  } catch (error) {
    action({
      type: "failure",
    });
  }
};

export const getItems = (itemId) => async (action) => {
  try {
    action({
      type: "postRequest",
    });

    const { data } = await axios.get(`/items?itemId=${itemId}`);

    action({
      type: "postSucess",
      data: data,
      message: data.message,
    });

    console.log(data);
  } catch (err) {
    action({
      type: "postFailure",
    });

    console.log(err);
  }
};

export const createItem =
  (title, description, price, image) => async (action) => {
    try {
      action({
        type: "createItemRequest",
      });

      const { data } = await axios.post("/admin/createitem", {
        title,
        description,
        price,
        image,
      });

      console.log(data);

      action({
        type: "createItemSucess",
      });
    } catch (err) {
      console.log(err.message);
    }
  };
