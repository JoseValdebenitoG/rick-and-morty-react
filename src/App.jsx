import { Routes, Route, Link } from "react-router-dom";
import "../src/css/app.css";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import EpisodeDetail from "./components/EpisodeDetail";
import EpisodeDetailList from "./components/EpisodeDetailList";

function App() {
  return (
    <main className="container">
      <a href="/" className="portal-wrapper">
        <p className="portal-text">Go Home</p>
        <img src="/portal.png" className="logo" alt="portal" />
      </a>
      <h1 className="title">Rick and Morty</h1>
      <section className="navPages">
        <Link to="episodes" className="navPagesButtons">
          Episodes
        </Link>
        <Link to="episodes" className="navPagesButtons">
          Locations
        </Link>
      </section>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/episodes/episode" element={<EpisodeDetailList />} />
      </Routes>
    </main>
  );
}

export default App;
