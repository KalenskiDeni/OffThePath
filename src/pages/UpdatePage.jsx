// Created by Mila

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const url = `https://offthepath-webapp-default-rtdb.firebaseio.com/posts/${params.id}.json`;

  // Fetch post data from the database
  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const postData = await response.json(); // Convert response to JSON
      console.log("Fetched Data:", postData); // Log the fetched data
      if (postData) {
        setContent(postData.content);
        setImage(postData.image);
        setLocation(postData.location || "");
      } else {
        console.log("Error fetching post data or post does not exist");
      }
    }

    getPost(); // Call the function to fetch data
  }, [url]); // Run this effect when the URL changes

  // Handle form submission to update the post
  async function handleSubmit(event) {
    event.preventDefault();

    // Prepare the updated post data
    const postToUpdate = { content, image, location };

    try {
      // Send a PATCH request to update the post
      const response = await fetch(url, {
        method: "PATCH", // this updates the existing post
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postToUpdate),
      });

      // Check if the response is OK
      if (response.ok) {
        console.log("Update successful"); // Log a success message
        navigate(`/posts/${params.id}`); // Navigate to the updated post's detail page
      } else {
        console.error("Update failed", response.statusText); // Log an error message if the update fails
      }
    } catch (error) {
      console.error("Error updating post:", error); // Log any errors that occur during the fetch request
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file && file.size < 500000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Image file is too large or no file selected");
    }
  }

  // Return the JSX for the UpdatePage component
  return (
    <section className="page create-post-page" id="update-page">
      <div className="container post-input-container">
        <h1>Update Post</h1>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={content}
            aria-label="content"
            placeholder="Update your post content..."
            onChange={(e) => setContent(e.target.value)}
            className="caption-input"
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            placeholder="Enter location..."
            onChange={(e) => setLocation(e.target.value)}
            className="caption-input"
          />
          <label htmlFor="image-url">Image</label>
          <input
            type="file"
            className="file-input"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor="image-preview"
            className="image-preview-label"
          ></label>
          <img
            id="image-preview"
            className="image-preview"
            src={image || "placeholder-image-url"}
            alt="Image Preview"
          />
          <button type="submit" className="header-btn share-btn">
            Update Post
          </button>
        </form>
      </div>
    </section>
  );
}
