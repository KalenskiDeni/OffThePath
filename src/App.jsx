<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom";
=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
>>>>>>> 00f5ea161699881a627b8690cbf9ebd7336cfaab
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";
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
<<<<<<< HEAD
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");
=======
import FavoritesPage from "./pages/FavoritesPage";
import Popout from "./components/Popout"; // Import the modal component

function App() {
  const location = useLocation();
  const hideNavPaths = ["/", "/signin", "/signup"]; // Add paths where you want to hide the navbar
  const [isPopoutOpen, setIsPopoutOpen] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsPopoutOpen(true);
    } else {
      setIsPopoutOpen(false);
    }
  }, [location.pathname]);
>>>>>>> 00f5ea161699881a627b8690cbf9ebd7336cfaab

  // Authentication state handler
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // If a user is authenticated, update state
      setIsAuth(true);
      localStorage.setItem("isAuth", "true");
    } else {
      // If no user is authenticated, reset state
      setIsAuth(false);
      localStorage.removeItem("isAuth");
    }
  });

  // Private Routes for authenticated users
  const privateRoutes = (
    <>
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/barcelona" element={<BarcelonaPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:id/update" element={<UpdatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
=======
      {!hideNavPaths.includes(location.pathname) && <Nav />}
      <main>
        <Popout isOpen={isPopoutOpen} onClose={() => setIsPopoutOpen(false)} />

        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/barcelona" element={<BarcelonaPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
>>>>>>> 00f5ea161699881a627b8690cbf9ebd7336cfaab
    </>
  );

  // Public Routes for unauthenticated users
  const publicRoutes = (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );

  // Render the routes based on authentication state
  return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}

export default App;
