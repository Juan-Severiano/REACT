import { Card } from "../CharacterSingleRender"

const CharacterListRender = ({ data }) => {
  return (
    <div className="container">
      <div className="row g-3">
        {
          data.map(character => {
            return <Card character={character} key={character.id} />
          })
        }
      </div>
    </div>
  )
}

export default CharacterListRender
