import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  // Fetch the post when the component loads
  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        `https://offthepath-webapp-default-rtdb.firebaseio.com/posts/${id}.json`
      );
      const data = await response.json();
      setPost(data);
    }

    getPost();
  }, [id]);

  // Navigate to the update page for this post
  function navigateToUpdate() {
    navigate(`/posts/${id}/update`);
  }

  // Handle deleting the post
  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) {
      return;
    }

    const response = await fetch(
      `https://offthepath-webapp-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      navigate("/");
    } else {
      alert("Failed to delete the post. Please try again.");
    }
  }

  return (
    <section className="page" id="post-page">
      <div className="container">
        <h1>{post.caption}</h1>
        <PostCard post={post} />
        <div className="btns">
          {/* Delete Button */}
          <button className="btn-cancel" onClick={handleDelete}>
            Delete Post
          </button>
          {/* Update Button */}
          <button className="btn" onClick={navigateToUpdate}>
            Update Post
          </button>
        </div>
      </div>
    </section>
  );
}
