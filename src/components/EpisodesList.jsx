import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Episode from "./Episodes";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const api = `${import.meta.env.VITE_API_EPI_URL}=${page}`;
      const response = await fetch(api);
      const data = await response.json();
      setLoading(false);
      setEpisodes(data.results);
      console.log(data.results);
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
          <h2>Episodios</h2>
          {episodes.map((episode) => {
            return (
              <div className="character card" key={episode.id}>
                <Episode episode={episode} />
              </div>
            );
          })}
        </div>
      )}

      <NavMenu page={page} setPage={setPage} />
    </div>
  );
}
