
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from '@mui/system';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material';
import * as yup from 'yup';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: 400,
    margin: 'auto',
  },
}));

const schema = yup.object().shape({
  carModel: yup.string().required('Car Model is required'),
  fullName: yup.string().required('Full Name is required'),
  pickupDate: yup.date().required('Pickup Date is required'),
});

const Reserve = () => {
  const classes = useStyles();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Reservation Data:', data);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>Reserve a Car</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl error={!!errors.carModel}>
          <TextField
            label="Car Model"
            variant="outlined"
            {...register('carModel')}
            InputProps={{
              startAdornment: <DriveEtaOutlinedIcon />,
            }}
          />
          <FormHelperText>{errors.carModel?.message}</FormHelperText>
        </FormControl>
        <FormControl error={!!errors.fullName}>
          <TextField
            label="Full Name"
            variant="outlined"
            {...register('fullName')}
            InputProps={{
              startAdornment: <AccountCircleOutlinedIcon />,
            }}
          />
          <FormHelperText>{errors.fullName?.message}</FormHelperText>
        </FormControl>
        <FormControl error={!!errors.pickupDate}>
          <TextField
            label="Pickup Date"
            type="date"
            variant="outlined"
            {...register('pickupDate')}
            InputProps={{
              startAdornment: <CalendarTodayOutlinedIcon />,
            }}
          />
          <FormHelperText>{errors.pickupDate?.message}</FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Reserve Now
        </Button>
      </form>
    </Container>
  );
};

export default Reserve;