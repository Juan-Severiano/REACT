import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Aline', 'Marcelo', 'Camila']);

  const [myObject] = useState([
    { id: 1, name: 'Aline', age: 29 }, { id: 2, name: 'Marcelo', age: 27 }, { id: 3, name: 'Camila', age: 26 },
  ]);

  return (
    <ul>
      {
        list.map((aluno, index) => <li key={index}>{aluno}</li>)
      }
      {
        myObject.map((aluno) => <li key={aluno.id}>{aluno.name} | {aluno.age}</li>)
      }
    </ul>
  )
}

export default ListRender
