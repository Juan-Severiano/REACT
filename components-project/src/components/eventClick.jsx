
const eventClick = () => {

  const handleEvent = () => {
    console.log('Event Click')
  }

  const renderAlgumaCoisa = (x) => {
    if (x === true) {
      return <h1>foi renderizado como true</h1>
    } else {
      return <h1>foi renderizado como false</h1>
    }
  }

  return (
    <>
      <button type="button" onClick={() => console.log('Clique de evento')}>Click here</button>
      <hr />
      <button type="button" onClick={handleEvent}>Click here 2</button>
      {renderAlgumaCoisa(true)}
      <hr />
      {renderAlgumaCoisa(false)}
    </>
  )
}

export default eventClick
