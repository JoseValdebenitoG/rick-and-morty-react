import "../css/Character.css";
// destructuramos las props que vienen de CharacterList con {character}
// con esto nos evitamos poner  props.character.name
function Character({ character }) {
  return (
    <div className="card">
      <h2 className="name">{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
      <p>{character.species}</p>
    </div>
  );
}

export default Character;
