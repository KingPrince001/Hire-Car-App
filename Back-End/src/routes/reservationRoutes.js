import { checkCarAvailability ,getAlternativeCars, getRentalDuration, getRentalRestrictions} from "../controllers/reservationRoutesControllers.js";


const reservationRoutes = (app) => {
    app.route('/checkCarAvailability')
    .post(checkCarAvailability);
    app.route('/alternativeCars')
    .post(getAlternativeCars)
    app.route('/rentalDuration/:reservationId')
    .get(getRentalDuration)
    app.route(':carId')
    .get(getRentalRestrictions)



}


export default reservationRoutes;