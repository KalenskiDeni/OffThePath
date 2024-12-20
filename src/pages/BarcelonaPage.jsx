//created by Deni and Beatrise

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/barcelona.css";

// Importing icons and images
import logo from "../assets/icons/logo-blue.svg";
import backButton from "../assets/icons/backButton.svg";
import mainImage from "../assets/barcelona-main.png";
import pabloImage from "../assets/pablo.png";
import isabelImage from "../assets/isabel.png";
import luisImage from "../assets/luis.png";
import luciaImage from "../assets/lucia.png";
import post1Image from "../assets/post1.png";
import post2Image from "../assets/post2.png";
import post3Image from "../assets/post3.png";
import post4Image from "../assets/post4.png";

//defines the BarcelonaPage component and exports it as the default export
export default function BarcelonaPage() {
  //return defines the JSX structure of the BarcelonaPage component
  return (
    <div className="barcelona-page">
      {/* Header contains a navogation link to hom epage with a back button and a logo */}
      <header className="top-bar">
        <div className="top-bar-content">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={backButton} alt="Back Button" className="back-button" />
          </NavLink>
          <img src={logo} alt="Off The Path Logo" className="logo" />
        </div>
      </header>

      {/* this main image displays on the top of the page */}
      <div className="main-image">
        <img src={mainImage} alt="Barcelona, Spain" />
      </div>

      {/* displays location and rating info */}
      <div className="location-info">
        <h1>Barcelona, Spain</h1>
        <div className="rating">★★★★☆</div>
      </div>

      {/* lists recommended places in Barcelona */}
      <div className="recommended-places">
        <h3>Recommended places to visit</h3>
        <div className="places-list">
          {[
            "La Sagrada Familia",
            "Casa Milà",
            "Barri Gòtic",
            "La Rambla",
            "Park Güell",
            "Montjuïc Hill",
            "Plaça de Catalunya",
            "Barceloneta Beach",
          ].map((place, index) => (
            <span key={index} className="place">
              {place}
            </span>
          ))}
        </div>
      </div>

      {/* Top Rated Local Guides */}
      <div className="local-guides">
        <h3>Top rated local guides in the area</h3>
        <div className="guides-list">
          {[
            { name: "Pablo", img: pabloImage },
            { name: "Isabel", img: isabelImage },
            { name: "Luis", img: luisImage },
            { name: "Lucia", img: luciaImage },
          ].map((guide, index) => (
            <div key={index} className="guide">
              <img src={guide.img} alt={guide.name} />
              <p>{guide.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* General Information, also a "show more" button */}
      <div className="general-info">
        <h3>General Information</h3>
        <p>
          Barcelona is the capital of Catalonia, a region with its own language,
          Catalan, and a distinct identity...
        </p>
        <button className="show-more">Show more</button>
      </div>

      {/* this section lists recent posts and reviews with images, titles and ratings */}
      <div className="recent-posts">
        <h3>Recent Posts and Reviews</h3>
        <div className="posts-list">
          {[
            {
              title: "Best Solo Trip EVER!!!",
              img: post1Image,
              rating: "★★★★★",
            },
            { title: "Weekend on my own", img: post2Image, rating: "★★★★☆" },
            { title: "Not my favorite trip", img: post3Image, rating: "★★★☆☆" },
            {
              title: "Fun 2 weeks in Spain!",
              img: post4Image,
              rating: "★★★★★",
            },
          ].map((post, index) => (
            <div key={index} className="post">
              <img src={post.img} alt={post.title} />
              <div className="post-info">
                <span className="rating">{post.rating}</span>
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//ah, i wish i was buying myself flowers in Barcelona and NOT SITTING IN THE DUMB OLD BLUE ROOM!!!!!!!
