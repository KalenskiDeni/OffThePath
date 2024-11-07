import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
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
import OnBoarding from "./pages/OnBoarding";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
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

  return (
    <>
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
    </>
  );
}

export default App;
