import { useEffect, useState } from "react";
import Character from "./Character";
import "../css/CharacterList.css";

function NavMenu({ page, setPage }) {
  return (
    <nav className="nav-bar">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <h2>Page: {page}</h2>
      <button onClick={() => setPage(page + 1)}>Next</button>
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
        <div className="container">
          {characters.map((character) => {
            return (
              <div className="character" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavMenu page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
