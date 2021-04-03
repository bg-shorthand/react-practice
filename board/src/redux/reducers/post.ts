import { post } from "../../constance/type";

const UPLOAD_POST = "upload-post";

const initialState: post = {
  id: "",
  title: "",
  date: new Date(),
  content: "",
  category: "poem",
};

type action = {
  type: string;
  payload: post;
};

const postReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPLOAD_POST:
      return { ...action.payload };
    default:
      return state;
  }
};

const uploadPost = (newPost: post) => ({
  type: UPLOAD_POST,
  payload: newPost,
});

export default postReducer;
export { uploadPost };
