import React from "react";
import "/src/styles/profile.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
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
      } else {
        console.log("Error fetching post data or post does not exist");
      }
    }

    getPost();
  }, [url]);

  async function handleSubmit(event) {
    event.preventDefault();

    const postToUpdate = { content, image };

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postToUpdate),
      });

      if (response.ok) {
        console.log("Update successful");
        navigate(`/posts/${params.id}`); // Make sure this route exists
      } else {
        console.error("Update failed", response.statusText);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Image file is too large");
    }
  }

  return (
    <section className="page" id="update-page">
      <div className="container">
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
          />
          <label htmlFor="image-url">Image</label>
          <input
            type="file"
            className="file-input"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
              
