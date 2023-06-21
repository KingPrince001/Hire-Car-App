
import { styled } from '@mui/system';
import { Container, Typography, Grid, Avatar, Divider } from '@mui/material';

const useStyles = styled ((theme) => ({
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
    width: theme.spacing(12),
    height: theme.spacing(12),
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
  },
}));

const Account = () => {
  const classes = useStyles();

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    address: '123 Street, City',
    phone: '123-456-7890',
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>User Account</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} align="center">
          <Avatar className={classes.avatar} src={user.profilePicture} alt="User Avatar" />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{user.email}</Typography>
        </Grid>
        <Grid item xs={12} md={8} className={classes.section}>
          <Typography variant="h6" className={classes.label}>Address</Typography>
          <Typography variant="body1" className={classes.value}>{user.address}</Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={classes.label}>Phone</Typography>
          <Typography variant="body1" className={classes.value}>{user.phone}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
