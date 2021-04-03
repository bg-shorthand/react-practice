import { post } from "../constance/type";
import { firestore } from "./firebase";

const postsCollectionRef = firestore.collection("posts");
const postsDocRef = (id: string) => postsCollectionRef.doc(id);

const uploadPost = (newPost: post) => {
  postsDocRef(newPost.id).set(newPost);
};

export { uploadPost };
