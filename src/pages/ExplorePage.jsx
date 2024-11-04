import { useEffect, useState } from "react";
import ExploreCard from "../components/ExploreCard";
import { NavLink } from "react-router-dom";
import "/src/styles/explore.css";
import "/src/styles.css";
import HeartIcon from "../assets/icons/heart.svg";

export default function ExplorePage() {
  const [posts, setPosts] = useState([]); // set the initial state to an empty array

  useEffect(() => {
    async function fetchPosts() {
      const url =
        "https://offthepath-webapp-default-rtdb.firebaseio.com/explorePosts.json"; // fetch data from the url
      const response = await fetch(url);
      const data = await response.json(); // get the data from the response and parse it
      // from object to array
      const postsArray = Object.keys(data).map((postId) => ({
        id: postId,
        ...data[postId],
      })); // map the data to an array of objects
      setPosts(postsArray); // set the posts state with the postsArray
    }

    fetchPosts();
  }, []);

  return (
    <section className="explore-page">
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
