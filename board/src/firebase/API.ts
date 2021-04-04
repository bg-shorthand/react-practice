import { post } from "../constance/type";
import { firestore } from "./firebase";

const postsCollectionRef = firestore.collection("posts");
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const addPost = (newPost: post) => {
  postsDocRef(newPost.id + "").set(newPost);
  console.log("addPost", newPost);
};

const getAllPost = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs.map((post) => post.data());
  return list;
};

const getPoem = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "poem");
  return list;
};

const getNovel = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "novel");
  return list;
};

const getEssay = async () => {
  const snapshot = await postsCollectionRef.get();
  const list = snapshot.docs
    .map((post) => post.data())
    .filter((post) => post.category === "essay");
  return list;
};

export { addPost, getAllPost, getPoem, getNovel, getEssay };
