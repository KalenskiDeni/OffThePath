// Created by Magda
import { NavLink } from "react-router-dom";
import "/src/styles/onboarding.css";
import gif from "/src/assets/vid.gif"; // Video path

function MyComponent() {
  return (
    <div className="video">
      {/* Background GIF */}
      <img src={gif} alt="Background GIF" className="background-gif" />

      {/* Color Overlay */}
      <div className="overlay"></div>

      <div className="content">
        <h1 className="Title">Go OFF THE PATH!</h1>
        <br />
        <p className="Paragraph">
          Connect with locals, discover hidden gems, and explore the world on
          your terms. <br />
          Let’s make travel unforgettable!
        </p>
        <NavLink to="/signin" activeClassName="active">
          {" "}
          {/* they both navigate to the same location because now we dont have the full onboarding */}
          <button className="Continue">Continue</button>
        </NavLink>
        <NavLink to="/signin" activeClassName="active">
          <button className="Skip">Skip for now</button>
        </NavLink>
      </div>
    </div>
  );
}

export default MyComponent;

// i want to onboard a flight to the moon
