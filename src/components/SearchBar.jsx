import React from "react";

export default function SearchPage() {
  return (
    <section className="page">
      <div className="search-bar-button">
        <NavLink to="/search" activeClassName="active">
          <div className="search-bar">
            <span className="placeholder-text">
              Tell us about your latest adventure...
            </span>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
