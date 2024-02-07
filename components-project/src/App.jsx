import './App.css'
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/secondComponent'
import EventClick from './components/eventClick'
import AngularIcon from './assets/images/angular.png'

function App() {

  return (
    <div className='App'>
      <h1>Components Project</h1>
      <FirstComponent />
      <SecondComponent />
      <EventClick />
      <img src="/react.png" style={{ width: 200 }} alt="" />
      <img src={AngularIcon} alt="" />
    </div>
  )
}

export default App
