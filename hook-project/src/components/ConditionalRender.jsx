import { useState } from "react"

const ConditionalRender = () => {
  const [x, setX] = useState(true);
  const [name, setName] = useState('Paulo');

    const handleChangeX = () => {
      setX(!x);
    }

  return (
    <div>
      <h1>Isso sera exibido? </h1>
      <button type="button" onClick={handleChangeX}>Trocar</button>
      { x && <p>Se X for engual a true </p> }
      { !x && <p>Se X for engual a false</p> }
      <hr />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {
        name.toLowerCase() === 'paulo' ? 
        <div>
          Parabéns Paulo
        </div>
        : 
        <p>Quem eh tu mermão</p>
      }
    </div>
  )
}

export default ConditionalRender
