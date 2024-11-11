// created by Beatrise

import { NavLink } from "react-router-dom"; //imports the NavLink component from react-router-dom. The NavLink component is used to create navigation links in a React application.

//following line defines SeachPage as a functional component and exports it as the default export. That means when this file is imported elsewhere, the SearchPage component will be the default component.
export default function SearchPage() {
  //return defines the JSX structure of the SearchPage component.
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
//"search-bar-button" contains the search bar with placeholder text. the <NavLink> component is used to create a link to the /search route. When the user clicks on the search bar, they will be navigated to the search page.
