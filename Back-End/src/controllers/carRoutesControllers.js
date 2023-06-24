import sql from 'mssql';
import config from '../DataBase/config.js';


// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);

export const allCars = async (req, res) => {
  let connection;
  try {
    connection = await pool.connect();
    
    const result = await connection.request().query('SELECT * FROM cars');

    // Extract the car data from the result
    const cars = result.recordset.map((record) => ({
      car_id: record.car_id,
      available: record.available,
      make: record.make,
      model: record.model,
      year: record.year,
      size: record.size,
      mileage: record.mileage,
      fuel_type: record.fuel_type,
      transmission_type: record.transmission_type,
      features: record.features,
      category_id: record.category_id,
    }));

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error occurred while fetching all cars:', error);
    res.status(500).json({ error: 'An error occurred while fetching all cars' });
  } finally {
    if (connection) {
      connection.close();
    }
  }
};



// Use a try-catch block to handle errors
export const availableCars = async (req, res) => {
  let connection;
  try {
     // Acquire a new connection from the pool
     const connection = await pool.connect();
    // Executing the query 
    const result = await connection
      .request()
      .query('SELECT * FROM cars WHERE available = 1');

    res.status(200).json({ result });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching available cars:', error);

    // error message to the client
    res
      .status(500)
      .json({ error: 'An error occurred while fetching available cars' });
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};




// Use a try-catch block to handle errors
export const filterAvailableCars = async (req, res) => {
  try {
    // Extract the filter criteria from the request body
    const {
      make,
      model,
      size,
      mileage,
      fuelType,
      transmissionType,
      features,
    } = req.body;

    // Build the SQL query dynamically based on the provided filters
    let query = 'SELECT * FROM cars WHERE availability = 1';
    const parameters = [];

    if (make) {
      query += ' AND make = @make';
      parameters.push({ name: 'make', type: sql.VarChar, value: make });
    }

    if (model) {
      query += ' AND model = @model';
      parameters.push({ name: 'model', type: sql.VarChar, value: model });
    }

    if (size) {
      query += ' AND size = @size';
      parameters.push({ name: 'size', type: sql.VarChar, value: size });
    }

    if (mileage) {
      query += ' AND mileage <= @mileage';
      parameters.push({ name: 'mileage', type: sql.Int, value: mileage });
    }

    if (fuelType) {
      query += ' AND fuelType = @fuelType';
      parameters.push({ name: 'fuelType', type: sql.VarChar, value: fuelType });
    }

    if (transmissionType) {
      query += ' AND transmissionType = @transmissionType';
      parameters.push({ name: 'transmissionType', type: sql.VarChar, value: transmissionType });
    }

    if (features) {
      const featureNames = features.split(',').map((feature) => feature.trim());
      query += ' AND (';

      for (let i = 0; i < featureNames.length; i++) {
        query += `features LIKE @feature${i}`;

        if (i !== featureNames.length - 1) {
          query += ' OR ';
        }

        parameters.push({ name: `feature${i}`, type: sql.VarChar, value: `%${featureNames[i]}%` });
      }

      query += ')';
    }

    // Acquire a new connection from the pool
    const connection = await pool.connect();

    // Execute the parameterized query
    const request = connection.request();
    parameters.forEach((parameter) =>
      request.input(parameter.name, parameter.type, parameter.value)
    );

    const result = await request.query(query);

    // Release the connection back to the pool
    connection.close();

    res.status(200).json({ cars: result.recordset });
  } catch (error) {
    // Log the error details for debugging
    console.error('Error occurred while filtering available cars:', error);

    // Provide a more informative error message to the client
    res
      .status(500)
      .json({ error: 'An error occurred while filtering available cars' });
  }
};
