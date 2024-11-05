import { useState } from "react"; // Import useState hook
import { Navigate, Route, Routes } from "react-router-dom"; // Import routing components
import Nav from "./components/Nav"; // Import Nav component
import CreatePage from "./pages/CreatePage"; // Import page components
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ExplorePage from "./pages/ExplorePage";
import MatchPage from "./pages/MatchPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import BarcelonaPage from "./pages/BarcelonaPage";
import UpdatePage from "./pages/UpdatePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { auth } from "./firebase-config"; // Import Firebase auth configuration
import { onAuthStateChanged } from "firebase/auth"; // Import auth state change handler

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // Default value from localStorage

  // Listen for authentication state changes
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is authenticated / signed in
      setIsAuth(true);
      localStorage.setItem("isAuth", true); // Save auth state in localStorage
    } else {
      // User is not authenticated / not signed in
      setIsAuth(false);
      localStorage.removeItem("isAuth"); // Remove auth state from localStorage
    }
  });

  // Define private routes including Nav component
  const privateRoutes = (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/barcelona" element={<BarcelonaPage />} />
        <Route path="/posts/:id/update" element={<UpdatePage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to HomePage for undefined routes */}
      </Routes>
    </>
  );

  // Define public routes without Nav component
  const publicRoutes = (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/sign-in" />} /> {/* Redirect to SignIn for undefined routes */}
    </Routes>
  );

  // Render the appropriate routes based on authentication state
  return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}

export default App;
