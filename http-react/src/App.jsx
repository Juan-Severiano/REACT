import './App.css'

import { useEffect, useState } from 'react'
import axios from 'axios';

const url = 'http://localhost:3000/products'

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setItems(response.data);
      } catch(error) {
        alert('Error in the products request')
        console.log(error);
      }
    }
    fetch()
  }, []);

  async function handleSubmit() {
    try {
      const response = await axios.post(url, { name, price });
      console.log(response);
    } catch (error) {
      alert('Deu erro :)');
      console.log(error);
    }
  }

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`)
      console.log(response);
    } catch (error) {
      alert('Deu erro :)');
      console.log(error);
    }
  }

  return (
    <>
      <h1>lista de produtos</h1>

      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button type='button' onClick={() => handleRemove(product.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Adicionar produtos:</p>
        <form onSubmit={handleSubmit}>
          <label >
            nome: 
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço: 
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  )
}

export default App