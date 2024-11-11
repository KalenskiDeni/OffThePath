import React from "react";
import ReactDOM from "react-dom/client"; //imports the ReactDOM library from the react-dom package. The ReactDOM library is used to render React components in the DOM.
import App from "./App.jsx"; //imports the App component from the App.js file. The App component is the root component of the React application.
import "./styles.css"; //imports the styles.css file, which contains the global styles for the application.
import { BrowserRouter } from "react-router-dom"; //imports the BrowserRouter component from the react-router-dom package. The BrowserRouter component is used to wrap the root component of the application and enable routing in the application.

ReactDOM.createRoot(document.getElementById("root")).render(
  //line above finds the HTML element with the ID root and prepares it as the place where the React application will be displayed.

  //This is a special wrapper that helps catch potential problems in the application during development. It doesn't affect the app in production.
  <React.StrictMode>
    {/*this component enables navigation within the app without reloading the page, the basename prop sets the base URL for the app*/}
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/OffThePath/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
