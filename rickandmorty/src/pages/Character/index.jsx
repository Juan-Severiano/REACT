import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../../api";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: 'name'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api('/character/' + id );
        console.log(response.response)
        setCharacter(response.response);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className="text-white d-flex flex-column container ">
      <img src={character.image} alt={character.name} className="w-50" />
      {character.name}
    </div>
  )
}

export default Character
