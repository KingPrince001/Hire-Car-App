import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Person, Email, Phone, Home, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const schema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone_number: yup.string().required('Phone Number is required'),
  home_address: yup.string().required('Home Address is required'),
  gender: yup.string().required('Gender is required'),
  national_id: yup.string().required('National ID is required'),
  drivers_license_id: yup.string().required("Driver's License ID is required"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirm_password: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8081/auth/register", data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        alert(error.response.data.error); 
      });
  
    console.log(data);
  };
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" style={{ backgroundColor: '#f0f0f0', padding: '20px' }} spacing={2}>
      <Grid item xs={12}>
  <Typography variant="h2" component="h2" gutterBottom style={{ marginBottom: '0px', marginTop:'-10px', textAlign: 'center' }}>
    Register
  </Typography>
</Grid>

        <Grid item xs={12}>
          <TextField
            label="First Name"
            {...register('first_name')}
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Person />,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Last Name"
            {...register('last_name')}
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Person />,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Email />,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            {...register('phone_number')}
            error={!!errors.phone_number}
            helperText={errors.phone_number?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Phone />,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Home Address"
            {...register('home_address')}
            error={!!errors.home_address}
            helperText={errors.home_address?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Home />,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Gender"
            {...register('gender')}
            error={!!errors.gender}
            helperText={errors.gender?.message}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="National ID"
            {...register('national_id')}
            error={!!errors.national_id}
            helperText={errors.national_id?.message}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Driver's License ID"
            {...register('drivers_license_id')}
            error={!!errors.drivers_license_id}
            helperText={errors.drivers_license_id?.message}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Password"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: <VisibilityOff />,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Confirm Password"
            type="password"
            {...register('confirm_password')}
            error={!!errors.confirm_password}
            helperText={errors.confirm_password?.message}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: <Visibility />,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
