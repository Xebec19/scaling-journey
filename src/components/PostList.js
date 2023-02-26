import Post from "./Post";
import { posts } from "../constants/post";

export default function PostList() {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </>
  );
}
