import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Switch,
  Typography,
  Box,
  useTheme
} from '@mui/material';

const Contact = () => {
  const theme = useTheme(); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: 0,
      message: '',
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(2, 'Min 2 characters'),
      email: Yup.string().required('Required').email('Invalid email'),
      phone: Yup.number().typeError('Must be a number'),
      program: Yup.number().min(1, 'Please select a program'),
      message: Yup.string().required('Required').min(10, 'Min 10 characters'),
      agree: Yup.boolean().oneOf([true], 'You must agree'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        bgcolor: theme.palette.background.paper,  
        color: theme.palette.text.primary,        
        borderRadius: 2,
        boxShadow: 3,
        transition: 'all 0.3s ease'
      }}
    >
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" gutterBottom>
        If you have any questions, feel free to reach out to us!
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <Typography color="error">{formik.errors.name}</Typography>}

        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <Typography color="error">{formik.errors.email}</Typography>}

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          margin="normal"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <Typography color="error">{formik.errors.phone}</Typography>}

        <FormControl fullWidth margin="normal">
          <InputLabel id="program-label">Program of Study</InputLabel>
          <Select
            labelId="program-label"
            name="program"
            value={formik.values.program}
            label="Program of Study"
            onChange={formik.handleChange}
          >
            <MenuItem value={0}><em>Please select</em></MenuItem>
            <MenuItem value={1}>Software Engineering</MenuItem>
            <MenuItem value={2}>Information System</MenuItem>
            <MenuItem value={3}>Information Assurance</MenuItem>
            <MenuItem value={4}>Internet of Things</MenuItem>
            <MenuItem value={5}>Artificial Intelligence</MenuItem>
            <MenuItem value={6}>Digital Art & Design</MenuItem>
          </Select>
        </FormControl>
        {formik.errors.program && <Typography color="error">{formik.errors.program}</Typography>}

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          name="message"
          margin="normal"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && <Typography color="error">{formik.errors.message}</Typography>}

        <FormControlLabel
          control={
            <Switch
              checked={formik.values.agree}
              onChange={formik.handleChange}
              name="agree"
              color="primary"
            />
          }
          label="Agree to terms and conditions"
        />
        {formik.errors.agree && <Typography color="error">{formik.errors.agree}</Typography>}

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
