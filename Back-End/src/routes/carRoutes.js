import { allCars, availableCars, filterAvailableCars } from '../controllers/carRoutesControllers.js';

const carRoutes = (app) => {
  // Car routes
  app.route('/cars')
  // all cars
    .get(allCars);

    // available cars
  app.route('/cars/available')
    .get(availableCars);

    //filter available cars by make, model etc
  app.route('/cars/filter')
    .post(filterAvailableCars);
};

export default carRoutes;
