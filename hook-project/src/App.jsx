import './App.css'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import Data from './components/Data'
import ExecuteFunction from './components/ExecuteFunction'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Vermelha', newCar: true, Km: 0 },
    { id: 2, brand: 'Renault', color: 'Rosa', newCar: false, Km: 1230 },
    { id: 3, brand: 'Fusca', color: 'Amarelo', newCar: false, Km: 129472830 },
    { id: 4, brand: 'Brasilia', color: 'Amarela', newCar: false, Km: 3567222245 },
  ]

  function showMessage() {
    console.log('Evento do componente PAI')
  }

  return (
    <>
      <h1>Hooks</h1>
      <Data />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name='Juan' />
      {
        cars.map((car) => {
          return <CarDetails key={car.id} {...car} />
        })
      }
      <Container newValue="teste">
        <p>this content is a children</p>
      </Container>
      <Container newValue="Loading ...">
        <p>loading content</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
    </>
  )
}

export default App
