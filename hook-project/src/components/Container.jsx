import { any, node } from "prop-types"

const Container = ({ children, newValue }) => {
  return (
    <div>
      <h3>Titulo da bagaça</h3>
      {children}
      {newValue}
    </div>
  )
}

Container.propTypes = {
  children: node,
  newValue: any
}

export default Container
