import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CombinedState } from "redux";
import { post, posts } from "../../constance/type";

const List = () => {
  const posts = useSelector(
    (
      state: CombinedState<{
        post: posts;
        newPost: post;
      }>
    ) => state.post
  );

  useEffect(() => {}, []);

  return (
    <ul>
      {posts.map((post) => {
        return <li>{post.title}</li>;
      })}
    </ul>
  );
};

export default List;
