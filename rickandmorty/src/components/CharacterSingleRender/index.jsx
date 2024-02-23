import { Link } from "react-router-dom"

export const Card = ({ character }) => {
  console.log(character)
  return (
    <li className="character d-flex col-12 col-md-6 text-white" key={character.id}>
      <div className="card w-100">
        <img className="img-fluid card-img" src={character.image} alt={character.name} />
        <div className="card-body p-3">
          <h2  className="card-title text-white">
            {character.name}
          </h2>
          <p className="d-flex align-items-center status text-white">
            {character.status === 'Dead' ? <i style={{ color: 'red' }} className="bi bi-circle-fill"></i> : null}
            {character.status === 'Alive' ? <i style={{ color: 'green' }} className="bi bi-circle-fill"></i> : null}
            {character.status === 'unknown' ? <i style={{ color: '#4d4d4d' }} className="bi bi-circle-fill"></i> : null}
            {character.status} - {character.species}
          </p>
          <p className="disable text-white">Last known location:</p>
          <p><a href="" className="character-links mb-4">{character.location.name}</a></p>
          <Link to={`/characters/${character.id}`} className="character-links text-decoration-none mt-5"><p>Mais detalhes</p></Link>
        </div>
      </div>
    </li>)
}