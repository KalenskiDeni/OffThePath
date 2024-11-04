import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState(""); // State for location
  const params = useParams();
  const navigate = useNavigate();

  const url = `https://offthepath-webapp-default-rtdb.firebaseio.com/posts/${params.id}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const postData = await response.json();
      console.log("Fetched Data:", postData); // Debugging line
      if (postData) {
        setContent(postData.content);
        setImage(postData.image);
        setLocation(postData.location || ""); // Set initial location
      } else {
        console.log("Error fetching post data or post does not exist");
      }
    }

    getPost();
  }, [url]);

  async function handleSubmit(event) {
    event.preventDefault();

    const postToUpdate = { content, image, location }; // Include location in the update

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postToUpdate),
      });

      if (response.ok) {
        console.log("Update successful");
        navigate(`/posts/${params.id}`); // Ensure this route exists
      } else {
        console.error("Update failed", response.statusText);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file && file.size < 500000) { // Check for file size
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Image file is too large or no file selected");
    }
  }

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
            className="caption-input" // Apply your existing styles
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            placeholder="Enter location..."
            onChange={(e) => setLocation(e.target.value)}
            className="caption-input" // Use the same styles as caption-input
          />
          <label htmlFor="image-url">Image</label>
          <input
            type="file"
            className="file-input"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="image-preview" className="image-preview-label"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={image || "placeholder-image-url"} // Default placeholder image
            alt="Image Preview"
          />
          <button type="submit" className="header-btn share-btn">Update Post</button>
        </form>
      </div>
    </section>
  );
}
