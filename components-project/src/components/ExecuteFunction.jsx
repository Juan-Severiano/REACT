import { func } from 'prop-types'

const ExecuteFunction = ({ handleMessage }) => {
  const messages = ['Boa noite', 'Boa tarde', 'Bom dia'];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])} type="button">1</button>
      <button onClick={() => handleMessage(messages[1])} type="button">2</button>
      <button onClick={() => handleMessage(messages[2])} type="button">3</button>
    </div>
  )
}

ExecuteFunction.propTypes = {
  handleMessage: func
}

export default ExecuteFunction
