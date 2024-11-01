import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { NavLink } from "react-router-dom";
import "/src/styles/homepage.css";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("forYou");

  useEffect(() => {
    async function fetchPosts() {
      const url =
        "https://offthepath-webapp-default-rtdb.firebaseio.com/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      
      // Convert object to array
      const postsArray = Object.keys(data).map((postId) => ({
        id: postId,
        ...data[postId],
      }));
      setPosts(postsArray);
    }

    fetchPosts();
  }, []);

  return (
    <section className="page">
      
      {/* Tabs Section */}
      <div className="tab-buttons-home">
        <button
          className={activeTab === "forYou" ? "active" : ""}
          onClick={() => setActiveTab("forYou")}
        >
          For You
        </button>
        <button
          className={activeTab === "daily" ? "active" : ""}
          onClick={() => setActiveTab("daily")}
        >
          Daily
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "forYou" && (
          <>
            {/* Create Post Button */}
            <div className="create-post-button">
              <NavLink to="/create" activeClassName="active">
                <i className="icon-create"></i>
                <span className="create-button-text">
                  Tell us about your latest adventure...
                </span>
              </NavLink>
            </div>

            {/* Posts Grid */}
            <div className="grid">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {activeTab === "daily" && (
          <div className="daily-content">
            <h2>Daily Inspiration</h2>
            <p>Discover new places and experiences every day!</p>
            {/* Add more content or components specific to the "Daily" tab here */}
          </div>
        )}
      </div>
    </section>
  );
}
