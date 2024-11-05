import { Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Nav />
      <main>
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
        </Routes>
      </main>
    </>
  );
}

export default App;
