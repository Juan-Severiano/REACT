import { bool } from "prop-types"
import { number, string } from "prop-types"


const CarDetails = ({ brand, Km, color, newCar }) => {
  return (
    <div>
      <h3>Car details</h3>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {Km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

CarDetails.propTypes = {
  brand: string,
  Km: number,
  color: string,
  newCar: bool
}

export default CarDetails
