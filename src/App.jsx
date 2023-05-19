import "../src/css/app.css";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="main-container">
      <a href="/" className="portal-containter">
        <img src="/portal.png" className="logo" alt="portal" />
      </a>
      <h1 className="title">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
