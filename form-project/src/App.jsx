import './App.css'

// Meu Componentes
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>FORM - PAGE</h1>
      <hr />
      <MyForm user={{ nome: 'EU MSM', email: 'eumsm@teste.com.br', bio: 'EU sou dev', role: 'dev' }} />
    </>
  )
}

export default App