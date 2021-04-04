// import { Dispatch } from "react";
import { posts } from "../../constance/type";
// import { getAllPost } from "../../firebase/API";

const initialState: posts = [];

// const READ_LIST = "read-list";

type action = {
  type: string;
  payload: any;
};

// const getAllPostAsync = () => async (dispatch: Dispatch<action>) => {
//   const allPost = await getAllPost();
//   dispatch({ type: READ_LIST, payload: allPost });
// };

const postsReducer = (state = initialState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
