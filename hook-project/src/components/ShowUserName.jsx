import PropTypes from 'prop-types';

const ShowUserName = (props) => {
  return (
    <div>
      <h2>O seu nome de usuário é  {props.name}</h2>
    </div>
  )
}

ShowUserName.propTypes = {
  name: PropTypes.string
}

export default ShowUserName
