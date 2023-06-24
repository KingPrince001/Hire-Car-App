import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Loading from '../Loading';
import '../../pages/home.css';
import { Grid } from '@mui/material';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';
import seven from '../../assets/7.jpg';
import eight from '../../assets/8.jpg';
import nine from '../../assets/9.jpg';
import ten from '../../assets/10.jpg';
import './fetchcar.css';

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

  const carImageNames = [one, two, three, four, five, six, seven, eight, nine, ten];
  const mappedCarData = cars.map((car, index) => {
    const carImageName = carImageNames[index];
    const imageUrl = carImageName;

    return {
      ...car,
      imageUrl
    }
  });

  return (
    <div>
      {cars.length === 0 ? (
       <Loading loadingItem='Off-Loading Car Listings ...'/>
      ) : (
        <Grid container spacing={10}>
        {mappedCarData.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={car.id}>
            <div className='image-slide'>
              <div className="image-slide-master-container">
                <div className="image-slideand-text-container">
                  <div className="image-slide-img-container">
                    <img className='image-slide-image' src={car.imageUrl} alt={car.model} style={{ height: '20vh', width: '18vw' }} />
                  </div>
                  <div className="image-slide-text-container">
                    <h2 className="image-slide-text-title">Features</h2>
                    <p className="image-slide-text">{car.features}</p>
                  </div>
                </div>
                <h2 className="car-name">{car.make} {car.model}</h2>
                <div className="car-properties-container">
                <span className="car-properties">
                 <p className="car-size"> Size: {car.size}</p>
                  <p className="car-fuel-type">Fuel Type : {car.fuel_type}</p>
                </span>
                <p className="car-transmission-type">Transmission Type: {car.transmission_type}</p>
                <p className="car-year">Year: {car.year}</p>
                </div>
                <Button className='see-hire-details-btn'  variant="contained" color="primary" fullWidth>
            See Hire Details
          </Button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
        
      )}
    </div>
  );
};

export default CarList;
