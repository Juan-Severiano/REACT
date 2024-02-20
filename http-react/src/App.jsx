import { useEffect, useState } from 'react'
import './App.css';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    const body = {
      name: name,
      price: price
    }
    const res = e.preventDefault();
    await fetch(url, {
      method: 'POST',
      body: body.json()
    })
    console.log(res)
  }

  console.log(products)

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Name:</span>
            <input type="text" name='name' placeholder='Digite seu name' onChange={e => setName(e.target.value)} value={name} />
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" name='price' placeholder='Digite seu e-mail' onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          <button type="submit">enviar</button>
        </form>
      </div>
      <ul>
        {
          products.map(product => <li key={product.id}>{product.name} - R$ {product.price}</li>)
        }
      </ul>
    </>
  )
}

export default App
