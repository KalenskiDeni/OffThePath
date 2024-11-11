//created by Beatrise

import { useNavigate } from "react-router-dom"; // imports the useNavigate hook from react-router-dom. The useNavigate hook is used to navigate to different routes in a React application.

export default function ExploreCard({ post }) {
  // defines a functional component named ExploreCard and exports it as the default export. The component receives a post prop, which contains data about a specific post.
  const navigate = useNavigate(); //initializes the navigate function using the useNavigate hook. The navigate function can be used to navigate to different routes.
  function handleNavigate() {
    navigate(`/barcelona`); //handleNavigate is defined to handle navigation when the ExploreCard is clicked. It uses the navigate function to navigate to the /barcelona route.
  }

  // in the return statement the "explore-card" is the main container for the ExploreCard component. It contains an image element that displays the post photo and an h6 element that displays the post location. An onClick event is added to the article element to call the handleNavigate function when the ExploreCard is clicked.
  return (
    <article className="explore-card" onClick={handleNavigate}>
      <img src={post.photo} alt={post.location} />
      <h6>{post.location}</h6>
    </article>
  );
}
