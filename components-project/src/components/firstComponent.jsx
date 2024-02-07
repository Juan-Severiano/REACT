import { hello } from 'marvel-dev-api'

const firstComponent = () => {
  hello();
  return (
    <div>
      <h2>Meu primeiro Componente</h2>
    </div>
  )
}

export default firstComponent