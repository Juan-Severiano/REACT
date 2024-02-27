import { useEffect, useState } from "react"

function FetchAPI() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    setTimeout(() => {
      fetch('http://localhost:3000/products')
       .then(res => res.json())
       .then(json => setImages(json))
       .catch(error => console.log(error));
    }, 3000);
  }, []);

  return (
    <>
      {/* {
        images && images.map((image) => (
          <img src={image.url} key={image.id} alt={image.id} />
        ))
      } */}
      {
        images && images.map((image) => (
          // <img src={image.url} key={image.id} alt={image.id} />
          <p key={image.name}>{image.name}</p>
        ))
      }
    </>
  )
}

export default FetchAPI
