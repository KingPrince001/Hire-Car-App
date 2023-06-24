import cors from "cors"
import  express from "express";
import bodyParser from 'body-parser';
import config  from "./src/DataBase/config.js";
import carRoutes from './src/routes/carRoutes.js';
import authRoutes from "./src/routes/authRoutes.js";
import hireRateRoutes from "./src/routes/hireRateRoutes.js";
import reservationRoutes from "./src/routes/reservationRoutes.js";


const app = express();
app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );

  //middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// my routes
carRoutes(app);
authRoutes(app);
hireRateRoutes(app);
reservationRoutes(app);




//setting up cors
// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: 'GET, POST',
//     allowedHeaders: 'Content-Type, Authorization',
//   };
//     app.use(cors(corsOptions));
  

//testing my server
app.get('/', (req, res) => {
    res.send(
        'Hello 😎 CarHireAPI 😮 Prince;'
    )
});

app.listen(config.port, () => {
    console.log(`Server is 😊 running on ${config.url}`);
});