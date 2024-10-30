import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        `https://react-user-crud-app-default-rtdb.firebaseio.com/posts/${id}.json`
      );
      const data = await response.json();
      setPost(data);
    }

    getPost();
  }, [id]);

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) {
      return;
    }

    const response = await fetch(
      `https://react-user-crud-app-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <section className="page" id="post-page">
      <div className="container">
        <h1>{post.caption}</h1>
        <PostCard post={post} />
        <div className="btns">
          <button className="btn-cancel" onClick={handleDelete}>
            Delete Post
          </button>
          <button className="btn">Update Post</button>
        </div>
      </div>
    </section>
  );
}
