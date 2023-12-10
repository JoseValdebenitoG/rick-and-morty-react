export default function EpisodeDetail({ episode }) {
  return (
    <div>
      <h2 className="card-title">{episode.name}</h2>
      <p className="card-subtitle">Episode: {episode.episode}</p>
      <p className="card-details">First Episode: {episode.air_date}</p>
      <ul>
        <li>Characters: {episode.characters}</li>
      </ul>
    </div>
  );
}
