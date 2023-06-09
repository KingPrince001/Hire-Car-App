# Hire Car App.

This repository contains the source code and documentation for a car hire website. The website allows users to browse and rent cars for their transportation needs. It provides an intuitive and user-friendly interface to make the process of renting a car as seamless as possible.

## Features

- **Car Listings**: Users can browse through a wide range of available cars. Each car listing provides detailed information about the car, including its make, model, year, price, and availability.
- **Search and Filtering**: Users can easily search for cars based on their preferences, such as location, car type, price range, and availability dates. The website provides robust filtering options to narrow down the search results.
- **User Authentication**: Users can create an account and log in to the website. Authenticated users have access to additional features like booking a car, managing bookings, and leaving reviews.
- **Booking Management**: Authenticated users can book a car for a specific duration by selecting the desired dates. They can view and manage their bookings, including canceling or modifying existing bookings.
- **Ratings and Reviews**: Users can leave ratings and reviews for the cars they have rented. This feature helps future users make informed decisions based on the experiences of previous renters.
- **Admin Panel**: An admin panel is available to manage the car listings, user accounts, and bookings. Admins have the ability to add new cars, update existing listings, and handle user-related tasks.
- **Payment Integration**: The website integrates with a payment gateway to facilitate secure online payments for car rentals. Users can enter their payment details and complete the booking process smoothly.

## Technologies Used

The car hire website is built using the following technologies:

- **Frontend**: HTML, CSS, JavaScript, React.js, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: SQL Database
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe
- **Admin Panel**: React Admin
- **Deployment**: Heroku

## Getting Started

To run the car hire website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the root directory.
3. Set up the environment variables. Create a `.env` file based on the provided `.env.example` file and fill in the required values.
4. Start the backend server by running `npm run server` in the root directory.
5. Start the frontend development server by running `npm run client` in the root directory.
6. Open your browser and visit `http://localhost:3000` to access the website.

## Contributing

If you want to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with clear and descriptive commit messages.
5. Push your changes to your forked repository.
6. Create a pull request in this repository, describing your changes and the motivation behind them.

## License

This project is licensed under the [KIRINYAGA UNIVERSITY](LICENSE). Feel free to modify and distribute the code according to the terms of the license.

## Acknowledgments

I would like to acknowledge the following resources and libraries that have been instrumental in the development of this car hire website:

- [React](https://reactjs.org)
- [Express.js](https://expressjs.com)
- [SQL Database](https://www.your-sql-database-provider.com)
- [Stripe](https://stripe.com)
- [React Admin](https://marmelab.com/react-admin)
- [Heroku](https://www.heroku.com)
- [Material-UI](https://material-ui.com)

## Database Tables

The car hire website uses a SQL database to store various information. Below are the database tables used in this project:

### Car Table

| Column        | Type          | Description                     |
| ------------- | ------------- | ------------------------------- |
| car_id        | INT           | Unique car identifier           |
| make          | VARCHAR       | Car make                        |
| model         | VARCHAR       | Car model                       |
| year          | INT           | Car manufacturing year          |
| price         | DECIMAL       | Rental price per day            |
| available     | BOOLEAN       | Availability status             |
| category_id   | INT           | Foreign key referencing Vehicle Category Table |

**Primary Key:** car_id
**Foreign Key:** category_id (References Vehicle Category Table)  

#### Relationships:
- One car can be associated with multiple bookings (one-to-many relationship between Car and Booking).
- One car can be associated with multiple reviews (one-to-many relationship between Car and Review).
- One car can be associated with only one vehicle category (one-to-one relationship between car and vehicle category).

### Insurance Table

| Column          | Type          | Description                        |
| --------------- | ------------- | ---------------------------------- |
| insurance_id    | INT           | Unique insurance identifier        |
| name            | VARCHAR       | Insurance company name              |
| coverage_type   | VARCHAR       | Type of coverage provided           |
| premium_amount  | DECIMAL       | Premium amount for the insurance    |

**Primary Key:** insurance_id  

#### Relationships:
- One insurance can be associated with multiple bookings (one-to-many relationship between Insurance and bookings)

### Maintenance Table

| Column           | Type          | Description                             |
| ---------------- | ------------- | --------------------------------------- |
| maintenance_id   | INT           | Unique maintenance identifier           |
| car_id           | INT           | Foreign key referencing Car Table        |
| maintenance_date | DATE          | Date of maintenance                      |
| description      | VARCHAR       | Description of the maintenance activity  |
| cost             | DECIMAL       | Cost of the maintenance                  |

**Primary Key:** maintenance_id
**Foreign Key:** car_id (References Car Table)  

### Customer Table

| Column          | Type          | Description                         |
| --------------- | ------------- | ----------------------------------- |
| customer_id     | INT           | Unique customer identifier          |
| name            | VARCHAR       | Customer's full name                |
| email           | VARCHAR       | Customer's email address            |
| phone_number    | VARCHAR       | Customer's phone number             |

**Primary Key:** customer_id  

#### Relationships:
- One customer can have multiple bookings (one-to-many relationship between Customer and Booking)


### Location Table

| Column        | Type          | Description                        |
| ------------- | ------------- | ---------------------------------- |
| location_id   | INT           | Unique location identifier         |
| name          | VARCHAR       | Location name                      |
| address       | VARCHAR       | Location address                   |

**Primary Key:** location_id  

#### Relationships:
- One location can have multiple cars (one-to-many relationship between Location and cars)

### Vehicle Category Table

| Column             | Type          | Description                              |
| ------------------ | ------------- | ---------------------------------------- |
| category_id        | INT           | Unique vehicle category identifier       |
| name               | VARCHAR       | Name of the vehicle category              |
| description        | VARCHAR       | Description of the vehicle category       |

**Primary Key:** category_id  

#### Relationships:
- One vehicle category can have multiple cars (one-to-many relationship between Vehicle Category and cars)

### Profit/Loss Table

| Column        | Type          | Description                      |
| ------------- | ------------- | -------------------------------- |
| record_id     | INT           | Unique profit/loss record ID     |
| date          | DATE          | Date of the profit/loss record   |
| description   | VARCHAR       | Description of the record        |
| amount        | DECIMAL       | Amount (positive for profit, negative for loss) |

**Primary Key:** record_id

### Damage Report Table

| Column            | Type          | Description                            |
| ----------------- | ------------- | -------------------------------------- |
| report_id         | INT           | Unique damage report identifier         |
| car_id            | INT           | Foreign key referencing Car Table       |
| report_date       | DATE          | Date of the damage report               |
| description       | VARCHAR       | Description of the damage               |
| cost_estimate     | DECIMAL       | Cost estimate for repairing the damage  |

**Primary Key:** report_id
**Foreign Key:** car_id (References Car Table)  

#### Relationships:
- One car can have multiple damage reports (one-to-many relationship between Car and Damage Report)

### Hire Table

| Column          | Type          | Description                            |
| --------------- | ------------- | -------------------------------------- |
| hire_id         | INT           | Unique hire identifier                  |
| car_id          | INT           | Foreign key referencing Car Table       |
| customer_id     | INT           | Foreign key referencing Customer Table  |
| location_id     | INT           | Foreign key referencing Location Table  |
| start_date      | DATE          | Start date of the car hire              |
| end_date        | DATE          | End date of the car hire                |
| total_amount    | DECIMAL       | Total amount for the car hire           |
| status          | VARCHAR       | Status of the car hire                  |

**Primary Key:** hire_id
**Foreign Keys:** car_id (References Car Table), customer_id (References Customer Table), location_id (References Location Table)  

#### Relationships:
- One car can have multiple hires (one-to-many relationship between Car and Hire).

### Hire Payment Table

| Column             | Type          | Description                            |
| ------------------ | ------------- | -------------------------------------- |
| payment_id         | INT           | Unique payment identifier               |
| hire_id            | INT           | Foreign key referencing Hire Table      |
| amount             | DECIMAL       | Payment amount                          |
| payment_date       | DATE          | Date of the payment                     |

**Primary Key:** payment_id
**Foreign Key:** hire_id (References Hire Table)  

#### Relationships:
- One hire can have multiple payments (one-to-many relationship between Hire and Hire Payments).

### Ratings and Reviews Table

| Column       | Type     | Description                              |
| ------------ | -------- | ---------------------------------------- |
| review_id    | INT      | Unique review identifier                  |
| car_id       | INT      | Foreign key referencing Car Table         |
| customer_id  | INT      | Foreign key referencing Customer Table    |
| rating       | INT      | Rating given by the customer (e.g., 1-5)  |
| comment      | VARCHAR     | Customer's review or comments             |
| date         | DATE     | Date of the review submission             |

**Primary Key:** review_id
**Foreign Keys:** car_id (References Car Table), customer_id (References Customer Table)

Relationships:
- One car can have multiple ratings and reviews (one-to-many relationship between Car and Ratings/Reviews).
- One customer can provide multiple ratings and reviews (one-to-many relationship between Customer and Ratings/Reviews).

### Booking Management Table

| Column           | Type      | Description                                       |
| ---------------- | --------- | ------------------------------------------------- |
| booking_id       | INT       | Unique booking identifier                          |
| user_id          | INT       | Foreign key referencing User Table                 |
| car_id           | INT       | Foreign key referencing Car Table                  |
| start_date       | DATE      | Start date of the booking                          |
| end_date         | DATE      | End date of the booking                            |
| number_of_days   | INT       | Number of days for the booking                     |
| total_cost       | DECIMAL   | Total cost of the booking                          |
| status           | VARCHAR   | Status of the booking (Pending, Approved,canceled)    |
| actions          | VARCHAR   | Actions available for the booking ( View, Modify, Cancel) |
**Primary Key:** booking_id
**Foreign Keys:** user_id (References User Table), car_id (References Car Table)

### Relationships:
- One user can have multiple bookings (one-to-many relationship between User and Booking)
## Folder Structure.
```java
.
├── backend  
│   ├── controllers  
│   ├── models  
│   ├── routes  
│   └── server.js  
├── frontend  
│   ├── public  
│   ├── src  
│   │   ├── components  
│   │   │   ├── common  
│   │   │   ├── layout  
│   │   │   └── ui  
│   │   ├── pages  
│   │   ├── services  
│   │   ├── styles  
│   │   └── index.js  
│   ├── package.json  
│   └── .env  
├── database  
│   ├── migrations  
│   └── seeds  
├── README.md  
└── .gitignore  
```

### Explanation of the folder structure.


The folder structure above outlines the organization of the car hire website project using Material-UI. Each folder serves a specific purpose and helps in keeping the codebase organized.

- `backend`: Contains the server-side code.
  - `controllers`: Holds the controllers responsible for handling different routes and business logic.
  - `models`: Contains the database models or schemas.
  - `routes`: Contains the API routes.
  - `server.js`: The main file to run the backend server.

- `frontend`: Contains the client-side code.
  - `public`: Holds the public assets like index.html, images, etc.
  - `src`: Contains the source code files.
    - `components`: Holds reusable components used in different pages.
      - `common`: Contains common components like buttons, inputs, etc.
      - `layout`: Contains components related to the overall layout of the website.
      - `ui`: Contains UI components built with Material-UI.
    - `pages`: Contains the different pages of the website.
    - `services`: Contains services responsible for API calls and data manipulation.
    - `styles`: Holds the CSS or styling files.
    - `index.js`: The entry point of the frontend application.
  - `package.json`: Manages the dependencies and scripts for the frontend.
  - `.env`: Stores environment variables for the frontend.

- `database`: Contains the database-related files.
  - `migrations`: Holds the database migration files.
  - `seeds`: Contains the seed files for populating the database with initial data.

- `README.md`: The main README file explaining the project.
- `.gitignore`: Specifies files and directories to ignore when committing to version control.

This folder structure helps maintain a modular and organized codebase, making it easier to develop and maintain the car hire website project using Material-UI.


# Color Theme

For my car hire website, I have carefully selected a color scheme that combines black and gold hues to create a sleek and luxurious visual experience.

## Primary Color (Black)
- I use black (`#000000`) as the primary color throughout the website to establish a stylish and sophisticated backdrop.
- The black color is prominently applied to the header, navigation bar, and footer, ensuring a consistent visual identity across the site.

## Secondary Color (Gold)
- I incorporate gold (`#ffd700`) as the secondary color to add a touch of luxury and elegance to the overall design.
- Gold accents and highlights are strategically placed to draw attention to specific elements such as icons, headings, or important buttons.

## Text Color
- To ensure readability against the black background, I use white (`#ffffff`) or a light shade of gray (`#f5f5f5`) for text elements.
- Consistency is maintained throughout the website by employing white or light gray for headings, paragraphs, and labels.

## Button Color
- I use gold (`#ffd700`) as the primary color for buttons, providing a visually appealing and cohesive look.
- For interactive elements like buttons, I may consider implementing a hover effect or using a slightly darker shade of gold to provide visual feedback to users.

## Additional Accent Colors
- In addition to black and gold, I may introduce additional accent colors sparingly to add variety and visual interest.
- By utilizing HSL (Hue, Saturation, Lightness) color schemes, I can create unique accent colors that complement the black and gold theme while maintaining harmony and balance.
- These accent colors may be applied to specific elements such as error messages, notifications, or call-to-action buttons.

By combining the sophistication of black with the luxury of gold, along with carefully selected accent colors, I aim to create a visually stunning and engaging car hire website that resonates with users seeking a premium experience. 


