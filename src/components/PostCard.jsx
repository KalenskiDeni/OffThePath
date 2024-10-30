import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/posts/${post.id}`);
  }

  return (
    <article className="post-card" onClick={handleNavigate}>
      <UserAvatar uid={post.uid} />
      <img src={post.image} alt={post.caption} />
      <h3>{post.caption}</h3>
    </article>
  );
}
