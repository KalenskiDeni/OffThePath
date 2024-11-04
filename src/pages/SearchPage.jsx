//created by Beatrise

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "/src/styles/search.css";
import "/src/styles.css";
import logo from "../assets/icons/logo-blue.svg";
import backButton from "../assets/icons/backButton.svg";
import bar from "../assets/status-bar.png";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === "barcelona") {
      history.push("/barcelona");
    } else {
      alert("No results found");
    }
  };

  return (
    <section className="page">
      <header className="top-bar">
        <div className="top-bar-content">
          <NavLink to="/explore" activeClassName="active">
            <img src={backButton} alt="Back Button" className="back-button" />
          </NavLink>
          <img src={bar} alt="status bar" className="bar" />
          <img src={logo} alt="Off The Path Logo" className="logo" />
          <div className="top-bar-icons"></div>
        </div>
      </header>

      <div className="search-bar-button">
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to explore?"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

//top-bar is the header of the page. it contains the logo, and back button
//search-bar-button contains the search bar with placeholder text
