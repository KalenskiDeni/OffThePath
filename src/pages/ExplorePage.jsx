//created by Beatrise

import { useEffect, useState } from "react";
import ExploreCard from "../components/ExploreCard";
import { NavLink } from "react-router-dom";
import "/src/styles/explore.css";
import "/src/styles.css";
import HeartIcon from "../assets/icons/heart.svg"; //for the button that leads to favorites page
import logo from "../assets/icons/logo-blue.svg"; //for the OFF THE PATH logo
import backButton from "../assets/icons/backButton.svg"; //for the back button on the top bar
import bar from "../assets/status-bar.png"; //for the iOS status bar at the top of the screen

export default function ExplorePage() {
  const [posts, setPosts] = useState([]); // set the initial state to an empty array

  useEffect(() => {
    async function fetchPosts() {
      const url =
        "https://offthepath-webapp-default-rtdb.firebaseio.com/explorePosts.json"; // fetch data from the JSON file, specifically the explorePosts section
      const response = await fetch(url); // fetch the data from the URL
      const data = await response.json();
      const postsArray = Object.keys(data).map((postId) => ({
        id: postId,
        ...data[postId],
      }));
      setPosts(postsArray); // Update the state with the array of posts
    }

    fetchPosts();
  }, []);

  // the following code defines the structure and content of the ExplorePage component. It includes a top bar with navigation links and icons, a search bar with a placeholder text, a favorites button, and a container for explore cards. The posts array is mapped to render an ExploreCard component for each post.
  return (
    <section className="page">
      <header className="top-bar">
        <div className="top-bar-content">
          <NavLink to="/" activeClassName="active">
            <img src={backButton} alt="Back Button" className="back-button" />
          </NavLink>{" "}
          <img src={bar} alt="status bar" className="bar" />
          <img src={logo} alt="Off The Path Logo" className="logo" />
          <div className="top-bar-icons"></div>
        </div>
      </header>

      <div className="search-bar-button">
        <div className="search-bar">
          <NavLink to="/search" activeClassName="active">
            <span className="placeholder-text">
              What do you want to explore?
            </span>
          </NavLink>
        </div>
        <NavLink to="/favorites" activeClassName="active">
          <img src={HeartIcon} alt="Favorites" className="heart-icon" />
        </NavLink>
      </div>
      <div className="card-container">
        {posts.map((post) => (
          <ExploreCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
