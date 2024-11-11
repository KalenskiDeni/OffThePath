//created by Mila

import { useEffect, useState } from "react"; //hooks that help with side effects and state management.

// UserAvatar is a function that takes a uid (user ID) as a prop.
export default function UserAvatar({ uid }) {
  //user is a state variable that stores user data. setUser is a function that updates the user state.
  const [user, setUser] = useState({});

  // useEffect is a hook that runs the getUser function when the component mounts.
  useEffect(() => {
    getUser();

    // getUser is a function that fetches user data from the Firebase Realtime Database using the user ID (uid) prop.
    async function getUser() {
      const response = await fetch(
        `https://offthepath-webapp-default-rtdb.firebaseio.com/users/${uid}.json`
      );
      const data = await response.json();
      setUser(data); // set the user state with the data from firebase
    }
  }, [uid]);
  return (
    <div className="avatar">
      <img src={user?.image} alt={user?.id} />
      <span>
        <h3>{user?.name}</h3>
      </span>
    </div>
  );
}
