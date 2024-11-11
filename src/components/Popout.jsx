//created by Beatrise
//the popout (because of sudden code changes) is not showing up in the apps onboarding screen, but it was working before... i promise! :D

import "/src/styles.css";
import "/src/styles/popout.css";
//these lines import the CSS files that style the popout component

// ResizePopout is a functional component that displays a popout message to the user when the screen size is not optimal for the application.
const ResizePopout = ({ isOpen, onClose }) => {
  // The component receives two props: isOpen, which determines whether the popout is visible, and onClose, which is a function to close the popout.

  // If the popout is not open, the component returns null to render nothing.
  if (!isOpen) return null;

  // The component returns a div element with the class "popout-overlay" that contains the popout content.
  // The popout content includes a heading, a paragraph with instructions, and a button to close the popout.
  return (
    <div className="popout-overlay">
      <div className="popout-content">
        <h2>Resize Your Screen</h2>
        <p>Please resize your screen to 393x804px for the best experience ;D</p>
        <button onClick={onClose} className="close-button">
          Okay!
        </button>
      </div>
    </div>
  );
};

export default ResizePopout; //explorts the ResizePopout component as the default export, making it available for use in other parts of the application.
