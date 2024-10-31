import { useNavigate } from "react-router-dom";

export default function ExploreCard({ post }) {
  const navigate = useNavigate();

  function handleNavigate() {
    //add a place to where the explore card leads to - navigate(`/posts/${post.id}`); - (this is the old code from PostCard.jsx)
  }

  return (
    <article className="explore-card" onClick={handleNavigate}>
      <img src={post.image} alt={post.location} />
      <h6>{post.location}</h6>
    </article>
  );
}
