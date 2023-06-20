import { getAdditionalCharges, getHireRates, getPromotions } from "../controllers/hireRateRoutesControllers.js"; 


const hireRateRoutes = (app) => {
    // get hire rates
    app.route('/hireRates')
    .get(getHireRates)

    // available promotions
    app.route('/promotions')
    .get(getPromotions)

    // additional charges that might appply
    app.route('/additionalCharges')
    .get(getAdditionalCharges);

}


export default hireRateRoutes;