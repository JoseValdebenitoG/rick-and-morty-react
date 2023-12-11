import { Routes, Route, Link } from "react-router-dom";
import "../src/css/app.css";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";

function App() {
  return (
    <main className="container">
      <a href="/" className="portal-wrapper">
        <p className="portal-text">Go Home</p>
        <img src="/portal.png" className="logo" alt="portal" />
      </a>
      <h1 className="title">Rick and Morty</h1>
      <section className="navPages">
        <Link to="/" className="navPagesButtons">
          Personajes
        </Link>
        <Link to="episodes" className="navPagesButtons">
          Episodes
        </Link>
      </section>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodesList />} />
      </Routes>
    </main>
  );
}

export default App;
