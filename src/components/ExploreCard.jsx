import { useNavigate } from "react-router-dom";

export default function ExploreCard({ post }) {
  // const navigate = useNavigate(); - (this is the old code from PostCard.jsx, needs to be activated when i figure out line 7)

  function handleNavigate() {
    //add a place to where the explore card leads to - navigate(`/posts/${post.id}`); - (this is the old code from PostCard.jsx)
  }

  return (
    <article className="explore-card" onClick={handleNavigate}>
      <img src={post.photo} alt={post.location} />
      <h6>{post.location}</h6>
    </article>
  );
}
