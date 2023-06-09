import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import "../css/CharacterList.css";

function NavMenu({ page, setPage }) {
  return (
    <nav className="nav-bar">
      <h2>Page: {page}</h2>
      <div className="nav-bar_buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </nav>
  );
}

function CharacterList() {
  const [characters, setCharcters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharcters(data.results);
    }
    fetchData();
  }, [page]);


  return (
    <div>
      <NavMenu page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container animate__animated animate__fadeInUp">
          {characters.map((character) => {
            return (
              <Link to="episodes" className="card" key={character.id}>
                <Character character={character} /> 
              </Link>
            );
          })}
        </div>
      )}
      <NavMenu page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
