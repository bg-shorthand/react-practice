import { firestore } from "./firebase";

const todos = [
  { id: 1, content: "html", completed: false },
  { id: 2, content: "css", completed: false },
  { id: 3, content: "javascript", completed: false },
];

export const addTodos = () => {
  todos.forEach((todo) => {
    firestore
      .collection("todos")
      .doc(todo.id + "")
      .set(todo);
  });
};

const addData = (movie) => {
  firestore
    .collection("movies")
    .doc(movie.id + "")
    .set(movie);
};

const updateData = (id, updateTodo) => {
  firestore
    .collection("todos")
    .doc(id + "")
    .update(updateTodo);
};

const getData = (id) => {
  return firestore
    .collection("todos")
    .doc(id + "")
    .get();
};

const getAllData = () => {
  return firestore.collection("movies").get();
};

// const getData = () => {
//   firestore.collection()
// }

export { addData, updateData, getData, getAllData };
