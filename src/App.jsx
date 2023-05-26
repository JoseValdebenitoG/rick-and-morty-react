import "../src/css/app.css";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <main className="container">
      <a href="/" className="portal-wrapper">
        <p className="portal-text">Go Home</p>
        <img src="/portal.png" className="logo" alt="portal" />
      </a>
      <h1 className="title">Rick and Morty</h1>
      <CharacterList />
    </main>
  );
}

export default App;
