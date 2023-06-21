import { useState, useEffect } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8081/cars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  console.log(cars);

  return (
    <div>
      <h2>Car List</h2>
      {cars.length === 0 ? (
        <p>Loading...</p>
      ) : (
        cars.map((car) => (
          <div key={car.car_id}>
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Size: {car.size}</p>
            <p>Fuel Type: {car.fuel_type}</p>
            <p>Transmission Type: {car.transmission_type}</p>
            <p>Features: {car.features}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CarList;
