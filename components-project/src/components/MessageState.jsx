import { string } from 'prop-types'

const MessageState = ({ msg }) => {
  return (
    <div>
      <p>Minha mensagem é: {msg}</p>
    </div>
  )
}

MessageState.propTypes = 
{
  msg: string,
}
export default MessageState
