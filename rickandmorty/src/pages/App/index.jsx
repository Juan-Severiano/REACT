import { useEffect, useState } from "react"
import { api } from "../../api"
import CharacterListRender from "../../components/CharacterListRender";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api('/character');
        console.log(response.results)
        setCharacters(response.results);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <div>
      <CharacterListRender data={characters} />
    </div>
  )
}

export default App
