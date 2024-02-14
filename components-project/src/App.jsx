import './App.css'
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/secondComponent'
import EventClick from './components/eventClick'
import AngularIcon from './assets/images/angular.png'
import MessageState from './components/MessageState'
import { useState } from 'react'
import ExecuteFunction from './components/ExecuteFunction'

function App() {
  const [message, setMessage] = useState('Hello bicthes');

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App'>
      <h1>Components Project</h1>
      <FirstComponent />
      <SecondComponent />
      <EventClick />
      <img src="/react.png" style={{ width: 200 }} alt="" />
      <img src={AngularIcon} alt="" />
      <MessageState msg={message} />
      <ExecuteFunction handleMessage={handleMessage} />
   </div>
  )
}

export default App
