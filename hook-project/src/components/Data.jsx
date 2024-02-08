import { useState } from "react";

const Data = () => {
  const [someData, setSomeData] = useState(10)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button type="button" onClick={() => {
          setSomeData(someData + 1)
          console.log(someData)
        }}>Mudar valor</button>
      </div>
    </div>
  )
}

export default Data
