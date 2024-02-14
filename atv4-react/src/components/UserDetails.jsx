
const UserDetails = ({ user: { name, age, profession } }) => {
  return (
    <div className="card col-4">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <span className="card-text me-5">{age} anos</span>
        <span className="ms-3 card-text">{profession}</span>
        <p>{age >= 18 ? 'Pode tirar carteira' : 'Não pode'}</p>
      </div>
    </div>
  )
}

export default UserDetails
