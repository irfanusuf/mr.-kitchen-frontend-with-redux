import axios from "axios";

export const getAllItems = () => async (action) => {
  try {
    action({
      type: "request",
    });

    const { data } = await axios.get("/allItems");

    action({
      type: "sucess",
      messagePayload : data.message,
      dataPayload : data
    });

   
  } catch (error) {
    action({
      type: "failure",
  
    });
  } 
};



