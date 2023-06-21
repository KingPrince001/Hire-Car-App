
import { styled } from '@mui/system';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const useStyles = styled((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
  carInfo: {
    flex: 1,
  },
}));

const ActiveReservations = () => {
  const classes = useStyles();

  const reservations = [
    {
      id: 1,
      carImage: 'https://via.placeholder.com/150',
      carName: 'Car Model 1',
      pickupDate: '2023-06-25',
      returnDate: '2023-06-28',
    },
    {
      id: 2,
      carImage: 'https://via.placeholder.com/150',
      carName: 'Car Model 2',
      pickupDate: '2023-07-01',
      returnDate: '2023-07-04',
    },
  ];

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Active Reservations</Typography>
      {reservations.map((reservation) => (
        <Card key={reservation.id} className={classes.card}>
          <Avatar className={classes.avatar} src={reservation.carImage} alt="Car Image" />
          <div className={classes.carInfo}>
            <CardContent>
              <Typography variant="h6">{reservation.carName}</Typography>
              <Typography variant="body1">Pickup Date: {reservation.pickupDate}</Typography>
              <Typography variant="body1">Return Date: {reservation.returnDate}</Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default ActiveReservations;
