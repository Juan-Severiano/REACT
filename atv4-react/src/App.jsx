import { useState } from 'react'
import UserDetails from './components/UserDetails';

const initialState = [
  {
    id: 1,
    name: 'Paulo Junior',
    age: 29,
    profession: 'Dev FullStack Master Senior'
  },
  {
    id: 2,
    name: 'Lucas Gabriel',
    age: 16,
    profession: 'Desempregado'
  },
  {
    id: 3,
    name: 'Coringa',
    age: 29,
    profession: 'Louco'
  },
]

function App() {
  const [users] = useState(initialState);
  const [see, setSee] = useState(false)

  const handleTakeCart = () => {
    const newSee = !see;
    setSee(newSee);
  }

  return (
    <>
      <main className="container">
        <h1 className='mb-5'>Atividade 04 - React</h1>
        <button type="button" className='btn btn-primary' onClick={handleTakeCart}>Ver quem pode tirar carteira</button>
        <div className="row">
          {
            users.map((user) => {
              return <UserDetails key={user.id} user={user} />
            })
          }
          {
            see && <>
              <h2>Quem pode tirar carteira</h2>
              {
                users.map((user) => {
                  if (user.age >= 18) return <UserDetails key={user.id} user={user} />
                })}
            </>
          }
        </div>
      </main>
    </>
  )
}

export default App
