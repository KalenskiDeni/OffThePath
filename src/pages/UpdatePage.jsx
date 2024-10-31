import React from "react";
import "/src/styles/profile.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  // Use the provided Firebase URL structure with dynamic post ID
  const url = `https://offthepath-webapp-default-rtdb.firebaseio.com/posts/${params.id}.json`;

  useEffect(() => {
    // Fetch the post data to populate the form
    async function getPost() {
      const response = await fetch(url);
      const postData = await response.json();
      if (postData) {
        setContent(postData.content);
        setImage(postData.image);
      } else {
        console.log("Error fetching post data");
      }
    }

    getPost();
  }, [url]);

  async function handleSubmit(event) {
    event.preventDefault();

    const postToUpdate = { content, image };

    // Send PATCH request to update the post data
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postToUpdate),
    });

    if (response.ok) {
      navigate(`/posts/${params.id}`); // Navigate to the updated post's detail page
    } else {
      console.log("Error updating post data");
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // Ensure image file size is below 0.5MB
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
                : "https://placehold.co/600x400?text=Choose+an+image"
            }
            alt="Selected Preview"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400?text=Image+not+found")
            }
          />
          <div className="btns">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
}
