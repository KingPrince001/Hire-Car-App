
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Person, Email, Phone, Home, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  homeAddress: yup.string().required('Home Address is required'),
  gender: yup.string().required('Gender is required'),
  nationalId: yup.string().required('National ID is required'),
  driversLicenseId: yup.string().required("Driver's License ID is required"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup
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
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
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
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
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
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
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
            {...register('homeAddress')}
            error={!!errors.homeAddress}
            helperText={errors.homeAddress?.message}
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
            {...register('nationalId')}
            error={!!errors.nationalId}
            helperText={errors.nationalId?.message}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Driver's License ID"
            {...register('driversLicenseId')}
            error={!!errors.driversLicenseId}
            helperText={errors.driversLicenseId?.message}
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
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
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
