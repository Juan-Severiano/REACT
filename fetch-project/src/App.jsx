import { Suspense, useEffect, useState } from "react"

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
     .then(res => res.json())
     .then(json => setImages(json))
     .catch(error => console.log(error));
  }, [])

  return (
    <>
    <Suspense fallback={<p>Pegando ae</p>}>
      {
        images && images.map((image) => (
          <img src={image.url} key={image.id} alt={image.id} {... image } />
        ))
      }
    </Suspense>
    </>
  )
}

export default App
