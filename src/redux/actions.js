import axios from "axios";
const token = localStorage.getItem("token");

export const getAllItems = () => async (action) => {
  try {
    action({
      type: "request",
    });

    const { data } = await axios.get("/allItems", {
      headers: {
        token: token,
      },
    });

    action({
      type: "sucess",
      message: data.message,
      Payload: data.items,
    });
  } catch (error) {
    action({
      type: "failure",
      message: error.message,
    });
  }
};

export const getItem = (itemId) => async (action) => {
  try {
    action({
      type: "postRequest",
    });

    const { data } = await axios.get(`/items?itemId=${itemId}`, {
      headers: {
        token: token,
      },
    });

    action({
      type: "postSucess",
      payload: data.item,
      message: data.message,
    });

    console.log(data);
  } catch (err) {
    action({
      type: "postFailure",
      message: err,
    });

    console.log(err);
  }
};

export const createItem = (formdata) => async (action) => {
  try {
    action({
      type: "createItemRequest",
    });

    const { data } = await axios.post("/admin/createitem", formdata);

    console.log(data);

    action({
      type: "createItemSucess",
      message: data.message,
      dataPayload: data.item,
    });
  } catch (err) {
    action({
      type: "createItemFailure",
      message: err.message,
    });
  }
};

export const registerUser = (formdata) => async (action) => {
  try {
    action({
      type: "registerRequest",
    });

    const { data } = await axios.post("/user/register", formdata);

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
  // finally{

  //   action({
  //     type : "clearmessages"
  //   })
  // }
};

export const loginUser = (formdata) => async (action) => {
  try {
    action({
      type: "loginRequest",
    });

    const { data } = await axios.post("/user/login", formdata);

    action({
      type: "loginSucess",
      message: data.message,
      token: data.token,
    });
  } catch (err) {
    action({
      type: "loginFailure",
    });
    console.log(err);
  }
};


export const forgotPassWord = (formdata)=>async (action)=>{
  try {
    action({
      type: "forgotRequest",
    });

    const { data } = await axios.post("/user/forgotpassword", formdata);

    action({
      type: "forgotSucess",
      message: data.message,
     
    });
  } catch (err) {
    action({
      type: "forgotFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}

export const updatePass = (formdata) => async (action) => {
  try {
    action({
      type: "updatePassWordReq",
    });

    const { data } = await axios.post("/user/updatePassword" , formdata);

    action({
      type: "updatePassSucess",
      message: data.message,
    });
  } catch (err) {
    action({
      type: "updatePassFailure",
      message: err.data.message,
    });

    console.err(err);
  }
  finally{
    action({
      type: "updatePassFailure",
    });

  }
};

export const deleteUser = (formdata)=>async (action)=>{
  try {
    action({
      type: "delUserReq",
    });

    const { data } = await axios.post("/user/delete/me", formdata);   
    // needs email and pass

    action({
      type: "delUserSucess",
      message: data.message,
     
    });
  } catch (err) {
    action({
      type: "delUserFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}


export const logoutUser = (formdata)=>async (action)=>{
  try {
    action({
      type: "logoutReq",
    });

    const { data } = await axios.post("/user/logout", formdata);  // needs email only 

    action({
      type: "logoutSucess",
      message: data.message,
     
    });

    console.log(data)
  } catch (err) {
    action({
      type: "logoutFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}



export const changePassword = (formdata)=>async (action)=>{
  try {
    action({
      type: "changePassReq",
    });

    const { data } = await axios.post("/user/changePassword", formdata ,
    {
      headers : {token : token}
    });  
    // needs newPassword, ConfirmNewPassWord and token

    action({
      type: "ChangePassSucess",
      message: data.message,
     
    });

    console.log(data)
  } catch (err) {
    action({
      type: "changePassFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}



export const giveLike = (itemId)=>async (action)=>{
  try {
    action({
      type: "likeReq",
    });

    const { data } = await axios.post(`/user/like?itemId=${itemId}`,  {},
    {
      headers : {token : token}
    });  
    // needs itemId in query and token

    action({
      type: "likeSucess",
      message: data.message,
     
    });

    console.log(data)
  } catch (err) {
    action({
      type: "likeFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}


export const giveUnLike = (itemId)=>async (action)=>{
  try {
    action({
      type: "unlikeReq",
    });

    const { data } = await axios.post(`/user/unlike?itemId=${itemId}`,  {},
    {
      headers : {token : token}
    });  
    // needs itemId in query and token

    action({
      type: "unlikeSucess",
      message: data.message,
     
    });

    console.log(data)
  } catch (err) {
    action({
      type: "unlikeFailure",
    });
    console.log(err);
  }
  finally{
    action({
      type : "clearErrors"
    })
  }
}


export default getAllItems;
