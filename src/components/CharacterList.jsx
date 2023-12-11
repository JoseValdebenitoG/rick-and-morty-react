import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import "../css/CharacterList.css";
import NavMenuCharacters from "./NavMenuCharacters";

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
      <NavMenuCharacters page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="animate__animated animate__fadeInUp">
          <h1>Personajes</h1>
          <section className="container">
          {characters.map((character) => {
            return (
              <Link className="card" key={character.id}>
                <Character character={character} />
              </Link>
            );
          })}
          </section>
        </div>
      )}
      <NavMenuCharacters page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
