import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        <i className="icon-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/explore" activeClassName="active">
        <i className="icon-explore"></i>
        <span>Explore</span>
      </NavLink>
      <NavLink to="/match" activeClassName="active">
        <i className="icon-match"></i>
        <span>Match</span>
      </NavLink>
      <NavLink to="/chat" activeClassName="active">
        <i className="icon-chat"></i>
        <span>Chat</span>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <i className="icon-profile"></i>
        <span>Profile</span>
      </NavLink>
     
    </nav>
  );
}
