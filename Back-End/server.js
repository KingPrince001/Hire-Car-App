import  express from "express";
import config  from "./src/DataBase/config.js";
import carRoutes from './src/routes/carRoutes.js';
import hireRateRoutes from "./src/routes/hireRateRoutes.js";
import reservationRoutes from "./src/routes/reservationRoutes.js";


const app = express();

// my routes
carRoutes(app);
hireRateRoutes(app);
reservationRoutes(app);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//testing my server
app.get('/', (req, res) => {
    res.send(
        'Hello 😎 CarHireAPI 😮 Prince;'
    )
});

app.listen(config.port, () => {
    console.log(`Server is 😊 running on ${config.url}`);
});