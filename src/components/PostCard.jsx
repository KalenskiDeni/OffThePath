import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function PostCard({ post }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/posts/${post.id}`);
  }

  return (
    <article className="post-card" onClick={handleNavigate}>
      <UserAvatar uid={post.uid} />
      <h6>{post.location}</h6>
      <h6>{post.time}</h6>
      <p>{post.caption}</p>
      <img src={post.image} alt={post.caption} />
      <h6>{post.hashtags}</h6>


      <button>
      <FontAwesomeIcon icon={faHeart} />
      <p>Like</p>
      </button>
      
    </article>
  );
}
