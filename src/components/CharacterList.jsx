import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <nav>
      <button onClick={() => props.setPage(props.page - 1)}>Prev</button>
      <h3>Page: {props.page}</h3>
      <button onClick={() => props.setPage(props.page + 1)}>Next</button>
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
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="character" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
