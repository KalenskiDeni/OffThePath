// Stories.js
import React, { useEffect, useState } from "react";
import storyImage from "../assets/story-alex.png";


const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const url = "https://offthepath-webapp-default-rtdb.firebaseio.com/stories.json";
        const response = await fetch(url);
        const data = await response.json();

        // Convert the object data to an array format
        const storiesArray = Object.keys(data).map((storyId) => ({
          id: storyId,
          ...data[storyId],
        }));
        setStories(storiesArray);
      } catch (error) {
        console.error("Error fetching stories: ", error);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="stories">
      <div className="story create-story">
        <div className="story-image">
          <img
             src={storyImage}
            alt="Create Story"
            className="story-image"
          />
        </div>
        <button className="create-story-button">Create a story</button>
      </div>

      {stories.map(story => (
        <div key={story.id} className="story">
          <img src={story.image} alt={story.name} className="story-image" />
          <img
            src={story.avatar}
            alt={story.name}
            className="profile-picture"
          />
          <div className="story-info">{story.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
