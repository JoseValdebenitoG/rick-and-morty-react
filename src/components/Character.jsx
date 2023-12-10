import "../css/Character.css";
// destructuramos las props que vienen de CharacterList con {character}
// con esto nos evitamos poner  props.character.name
export default function Character({ character }) {
  return (
    <div className="character">
      <img className="image" src={character.image} alt={character.name} />
      <h2 className="card-title">Name: {character.name}</h2>
      <p className="card-subtitle">Species: {character.species}</p>
    </div>
  );
}
