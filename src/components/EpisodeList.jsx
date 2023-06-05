import { useEffect, useState } from "react";

export default function EpisodeList() {
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
      console.log(data.results)
    }
    fetchData();
  }, [page]);


  return (
    <div>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container animate__animated animate__fadeInUp">
          <h2>Episodios</h2>
          {characters.map((character) => {
            return (
              <div className="character" key={character.id}>
                <ul>
                  <li>{character.episode}</li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
