import { Dispatch } from "react";
import { getAllPost } from "../../firebase/API";

const UPDATE_ID = "update-id";
const UPDATE_TITLE = "update-title";
const UPDATE_CONTENT = "update-content";
const UPDATE_DATE = "update-date";
const UPDATE_CATEGORY = "update-category";

const initialState = {
  id: 0,
  title: "",
  content: "",
  date: new Date(),
  category: "poem",
};

export const idAction = () => async (
  dispatch: Dispatch<{ type: string; payload: number }>
) => {
  const posts = await getAllPost();
  const maxId = Math.max(...posts.map((post) => post.id));
  dispatch({ type: UPDATE_ID, payload: maxId + 1 });
  return maxId;
};
export const titleAction = (title: string) => ({
  type: UPDATE_TITLE,
  payload: title,
});
export const contentAction = (content: string) => ({
  type: UPDATE_CONTENT,
  payload: content,
});
export const dateAction = (date: Date) => ({
  type: UPDATE_DATE,
  payload: date,
});
export const categoryAction = (category: "poem" | "novel" | "essay") => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

type action = {
  type: string;
  payload: "" | Date | "poem" | "novel" | "essay";
};

export const newPostReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_ID:
      return { ...state, id: action.payload };
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_CONTENT:
      return { ...state, content: action.payload };
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
