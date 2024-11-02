import { useEffect, useState } from "react";
import ExploreCard from "../components/ExploreCard";
import { NavLink } from "react-router-dom";
import "/src/styles/explore.css";
import "/src/styles.css";

export default function ExplorePage() {
  const [posts, setPosts] = useState([]); // set the initial state to an empty array

  {
    /* Create Post Button */
  }
  <div className="create-post-button">
    <NavLink to="/create" activeClassName="active">
      <div className="create-post-box">
        <span className="placeholder-text">
          Tell us about your latest adventure...
        </span>
      </div>
    </NavLink>
  </div>;

  // Fetch data from the API
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://offthepath-webapp-default-rtdb.firebaseio.com/explorePosts.json"
      ); // fetch data from the url
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
    <section className="page">
      <div className="card-container">
        {posts.map((post) => (
          <ExploreCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
