import sql from 'mssql';
import config from '../DataBase/config.js';


// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);
const poolConnect = pool.connect();

// checking car availabilty over specific dates for booking
// try-catch block to handle errors
export const checkCarAvailability = async (req, res) => {
  const { carId, startDate, endDate } = req.body;
  let connection;

  try {
    connection = await poolConnect;
    
    // Query to check the availability of a specific car for the given dates
    const query = `
      SELECT *
      FROM reservations
      WHERE car_id = @carId
      AND start_date <= @endDate
      AND end_date >= @startDate
    `;
    
    const result = await connection.request()
      .input('carId', sql.Int, carId)
      .input('startDate', sql.DateTime, startDate)
      .input('endDate', sql.DateTime, endDate)
      .query(query);

    const isCarAvailable = result.recordset.length === 0;
    res.status(200).json({ isCarAvailable });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while checking car availability:', error);

    // Error message to the client
    res.status(500).json({ error: 'An error occurred while checking car availability' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};

export const getAlternativeCars = async (req, res) => {
  const { carId, startDate, endDate } = req.body;
  let connection;

  try {
    connection = await poolConnect;
    
    // Query to fetch alternative cars available for the given dates
    const query = `
      SELECT *
      FROM cars
      WHERE car_id <> @carId
      AND car_id NOT IN (
        SELECT car_id
        FROM reservations
        WHERE start_date <= @endDate
        AND end_date >= @startDate
      )
    `;
    
    const result = await connection.request()
      .input('carId', sql.Int, carId)
      .input('startDate', sql.DateTime, startDate)
      .input('endDate', sql.DateTime, endDate)
      .query(query);

    const alternativeCars = result.recordset;
    res.status(200).json({ alternativeCars });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching alternative cars:', error);

    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching alternative cars' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};

export const getRentalDuration = async (req, res) => {
  const { reservationId } = req.params;
  let connection;

  try {
    connection = await poolConnect;
    
    // Query to fetch the rental duration for a specific reservation
    const query = `
      SELECT DATEDIFF(DAY, start_date, end_date) AS rental_duration
      FROM reservations
      WHERE reservation_id = @reservationId
    `;
    
    const result = await connection.request()
      .input('reservationId', sql.Int, reservationId)
      .query(query);

    const rentalDuration = result.recordset[0].rental_duration;
    res.status(200).json({ rentalDuration });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching rental duration:', error);

    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching rental duration' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};

export const getRentalRestrictions = async (req, res) => {
  const { carId } = req.params;
  let connection;

  try {
    connection = await poolConnect;
    
    // Query to fetch rental restrictions for a specific car
    const query = `
      SELECT pickup_location, dropoff_location
      FROM cars
      WHERE car_id = @carId
    `;
    
    const result = await connection.request()
      .input('carId', sql.Int, carId)
      .query(query);

    const restrictions = result.recordset[0];
    res.status(200).json({ restrictions });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching rental restrictions:', error);

    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching rental restrictions' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};
