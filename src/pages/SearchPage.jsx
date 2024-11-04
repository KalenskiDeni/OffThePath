//created by Beatrise

import { NavLink } from "react-router-dom";
import "/src/styles/search.css";
import "/src/styles.css";
import logo from "../assets/icons/logo-blue.svg";
import backButton from "../assets/icons/backButton.svg";
import bar from "../assets/status-bar.png";

export default function SearchPage() {
  return (
    <section className="page">
      <header className="top-bar">
        <div className="top-bar-content">
          <NavLink to="/" activeClassName="active">
            <img src={backButton} alt="Back Button" className="back-button" />
          </NavLink>{" "}
          <img src={bar} alt="status bar" className="bar" />
          <img src={logo} alt="Off The Path Logo" className="logo" />
          <div className="top-bar-icons"></div>
        </div>
      </header>

      <div className="search-bar-button">
        <NavLink to="/search" activeClassName="active">
          <div className="search-bar">
            <span className="placeholder-text">
              What do you want to explore?
            </span>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

//top-bar is the header of the page. it contains the logo, and back button
//search-bar-button contains the search bar with placeholder text
