import { func } from "prop-types"

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button type="button" onClick={myFunction}>Clique pra executar a funcao</button>
    </div>
  )
}

ExecuteFunction.propTypes = {
  myFunction: func
}

export default ExecuteFunction
