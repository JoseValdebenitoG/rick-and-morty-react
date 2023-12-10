import { useEffect, useState } from "react";

export default function EpisodeDetailList() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const api = `${import.meta.env.VITE_API_EPI_DETAIL}/${id}`;
      const response = await fetch(api);
      const data = await response.json();
      setLoading(false);
      setEpisodes(data.results);
      console.log(data.results);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container animate__animated animate__fadeInUp">
          <h1>Episodios</h1>
          {episodes.map((episode) => {
            return (
              <div className="card" key={episode.id}>
                <EpisodeDetail episode={episode} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
