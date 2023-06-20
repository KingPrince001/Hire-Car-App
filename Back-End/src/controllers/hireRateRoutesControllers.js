import sql from 'mssql';
import config from '../DataBase/config.js';


// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);
const poolConnect = pool.connect();

// getting hire rates available
// try-catch block to handle errors
export const getHireRates = async (req, res) => {
  let connection;
  try {
    connection = await poolConnect;
    
    // Query to fetch hire rates for different cars or car categories
    const result = await connection.request().query('SELECT * FROM hire_rates');
    
    // Process the result and send the response
    const hireRates = result.recordset;
    res.status(200).json({ hireRates });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching hire rates:', error);
    
    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching hire rates' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};


// get available promotions
export const getPromotions = async (req, res) => {
  let connection;
  try {
    connection = await poolConnect;
    
    // Query to fetch active promotions or discounts
    const result = await connection.request().query('SELECT * FROM promotions');
    
    // Process the result and send the response
    const promotions = result.recordset;
    res.status(200).json({ promotions });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching promotions:', error);
    
    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching promotions' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};


// getting additional charges
export const getAdditionalCharges = async (req, res) => {
  let connection;
  try {
    connection = await poolConnect;
    
    // Query to fetch additional charges information
    const result = await connection.request().query('SELECT * FROM additional_charges');
    
    // Process the result and send the response
    const additionalCharges = result.recordset;
    res.status(200).json({ additionalCharges });
  } catch (error) {
    // Logging the error details for debugging
    console.error('Error occurred while fetching additional charges:', error);
    
    // Error message to the client
    res.status(500).json({ error: 'An error occurred while fetching additional charges' });
  } finally {
    // Releasing the connection back to the pool
    if (connection) {
      connection.close();
    }
  }
};
