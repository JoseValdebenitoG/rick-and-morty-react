import { useEffect, useState } from "react";
import Episode from "./Episodes";
import NavMenuEpisodes from "./NavMenuEpisodes";
import { Link } from "react-router-dom";

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
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <NavMenuEpisodes page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="animate__animated animate__fadeInUp">
          <h1>Episodios</h1>
          <section className="container">
          {episodes.map((episode) => {
            return (
              <Link to="episode" className="card" key={episode.id}>
                <Episode episode={episode} />
              </Link>
            );
          })}
          </section>
        </div>
      )}

      <NavMenuEpisodes page={page} setPage={setPage} />
    </div>
  );
}
