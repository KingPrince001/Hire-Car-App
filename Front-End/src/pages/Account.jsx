import { useContext } from 'react';
import { Context } from '../context/userContext/context';
import { styled } from '@mui/system';
import { Container, Typography, Grid, Avatar, Divider } from '@mui/material';
import { Person, Email, Home, Phone, CreditCard, DriveEta, Wc } from '@mui/icons-material';

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
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(4),
  },
  label: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  value: {
    marginTop: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(3, 0),
    marginBottom: theme.spacing(10),
  },
}));

const Account = () => {
  const { user } = useContext(Context);
  const classes = useStyles();

  const User = {
    profilePicture: 'https://via.placeholder.com/150',
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h2" align="center" gutterBottom className={classes.title}>
        User Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} align="center">
          <Avatar className={classes.avatar} src={User.profilePicture} alt="User Avatar" />
          <Typography variant="h6">
            {user.firstname} {user.lastname}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.email}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} className={classes.section}>
          <Typography variant="h6" className={classes.label}>
            <Home /> Home Address
          </Typography>
          <Typography variant="body1" className={classes.value}>
            {user.homeaddress}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.label}>
            <Phone /> Phone Number
          </Typography>
          <Typography variant="body1" className={classes.value}>
            {user.phonenumber}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.label}>
            <CreditCard /> National ID
          </Typography>
          <Typography variant="body1" className={classes.value}>
            {user.nationalid}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.label}>
            <DriveEta /> Driver's License ID
          </Typography>
          <Typography variant="body1" className={classes.value}>
            {user.driverslicenseid}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.label}>
            <Wc /> Gender
          </Typography>
          <Typography variant="body1" className={classes.value}>
            {user.gender}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
