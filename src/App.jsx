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
<<<<<<< HEAD
import UpdatePage from "./pages/UpdatePage";

=======
import FavoritesPage from "./pages/FavoritesPage";
>>>>>>> 25cd3c701f4ce1b7be2fe2b40755b24f3445b976

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/barcelona" element={<BarcelonaPage />} />
<<<<<<< HEAD
          <Route path="/posts/:id/update" element={<UpdatePage />} />
=======
          <Route path="/favorites" element={<FavoritesPage />} />
>>>>>>> 25cd3c701f4ce1b7be2fe2b40755b24f3445b976
        </Routes>
      </main>
    </>
  );
}

export default App;
