import Form from "../components/Form";
import PostList from "../components/PostList";
import Layout from "../components/UI/Layout";

export default function Board() {
  return (
    <Layout>
      <Form />
      <PostList />
    </Layout>
  );
}
