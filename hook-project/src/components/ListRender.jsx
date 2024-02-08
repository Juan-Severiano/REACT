import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Aline', 'Marcelo', 'Camila']);

  return (
    <ul>
      {
        list.map((aluno) => <li key={1}>{aluno}</li>)
      }
    </ul>
  )
}

export default ListRender
