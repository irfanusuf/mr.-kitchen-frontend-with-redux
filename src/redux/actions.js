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

export const registerUser =
  (username, email, password, image) => async (action) => {
    try {
      action({
        type: "registerRequest",
      });

      const { data } = await axios.post("/user/register", {
        username,
        email,
        password,
        image,
      });

      action({
        type: "registerSucess",
        payload: data.message,
      });
    } catch (err) {
      action({
        type: "registerFailure",
      });
      console.log(err);
    }
  };


  export const loginUser =
  (email, password) => async (action) => {
    try {
      action({
        type: "loginRequest",
      });

      const { data } = await axios.post("/user/login", {
      
        email,
        password,
       
      });

      action({
        type: "loginSucess",
        payload: data.message,
      });
    } catch (err) {
      action({
        type: "loginFailure",
      });
      console.log(err);
    }
  };