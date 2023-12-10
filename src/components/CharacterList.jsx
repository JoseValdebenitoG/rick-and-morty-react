import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import NavMenu from "./NavMenu";
import "../css/CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const api = `${import.meta.env.VITE_API_CHAR_URL}=${page}`;
      const response = await fetch(api);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
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
