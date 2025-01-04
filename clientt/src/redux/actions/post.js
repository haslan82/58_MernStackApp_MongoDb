import axios from "axios";
import { toast } from "react-toastify";


export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5005/getPosts",
     
    );

    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: false,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "light",
      // transition: Bounce,
    });
  }
};


/* export const createPostAction = (postData) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5005/createPost",postData
       
      );
  
      dispatch({
        type: "CREATE_POST",
        payload: data,
      });
    
    } catch (error) {
      toast(error.response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: false,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
        // theme: "light",
        // transition: Bounce,
      });
    }
  }; */
  


  export const createPostAction = (postData) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5005/createPost",
        postData
      );
  
      if (response && response.data) {
        dispatch({
          type: "CREATE_POST",
          payload: response.data,
        });
      } else {
        throw new Error("Beklenmeyen yanıt yapısı");
      }
    } catch (error) {
      console.error("Create Post Error:", error);
      const errorMessage =
        error.response?.data?.msg || "Bir hata oluştu. Lütfen tekrar deneyin.";
      toast(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };
  






  export const updatePostsAction = (id, postData) => async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5005/updatePost/${id}`,postData
       
      );
  
      dispatch({
        type: "UPDATE_POST",
        payload: data,
      });
    
    } catch (error) {
      toast(error.response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: false,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
        // theme: "light",
        // transition: Bounce,
      });
    }
  };

  export const deletePostAction = (id) => async (dispatch) => {
    try {
    await axios.delete(
       `http://localhost:5005/deletePost/${id}`,
       
      );
  
      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    
    } catch (error) {
      toast(error.response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: false,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
        // theme: "light",
        // transition: Bounce,
      });
    }
  };