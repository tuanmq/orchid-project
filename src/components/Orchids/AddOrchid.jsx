import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Switch,
  Typography,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '@mui/material/styles'; 

const AddOrchid = () => {
  const navigate = useNavigate();
  const theme = useTheme(); 

  const formik = useFormik({
    initialValues: {
      name: '',
      origin: '',
      color: '',
      category: '',
      image: '',
      videoUrl: '',
      description: '',
      rating: 0,
      numberOfLike: 0,
      isSpecial: false,
      isNatural: true,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      origin: Yup.string().required('Origin is required'),
      color: Yup.string().required('Color is required'),
      category: Yup.string().required('Category is required'),
      image: Yup.string().url('Image must be a valid URL').required('Image is required'),
      videoUrl: Yup.string().url('Video must be a valid URL'),
      description: Yup.string().required('Description is required').min(10, 'At least 10 characters'),
      rating: Yup.number().min(0, 'Min is 0').max(5, 'Max is 5').required('Rating is required'),
      numberOfLike: Yup.number().min(0, 'Min is 0').required('Number of likes is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(import.meta.env.VITE_API_URL, values);
        alert('Orchid added successfully!');
        navigate('/');
      } catch (err) {
        alert('Failed to add orchid!');
        console.error(err);
      }
    }
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Add New Orchid
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          fullWidth label="Name" name="name" margin="normal"
          value={formik.values.name} onChange={formik.handleChange}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth label="Origin" name="origin" margin="normal"
          value={formik.values.origin} onChange={formik.handleChange}
          error={formik.touched.origin && !!formik.errors.origin}
          helperText={formik.touched.origin && formik.errors.origin}
        />

        <TextField
          fullWidth label="Color" name="color" margin="normal"
          value={formik.values.color} onChange={formik.handleChange}
          error={formik.touched.color && !!formik.errors.color}
          helperText={formik.touched.color && formik.errors.color}
        />

        <TextField
          fullWidth label="Category" name="category" margin="normal"
          value={formik.values.category} onChange={formik.handleChange}
          error={formik.touched.category && !!formik.errors.category}
          helperText={formik.touched.category && formik.errors.category}
        />

        <TextField
          fullWidth label="Image URL" name="image" margin="normal"
          value={formik.values.image} onChange={formik.handleChange}
          error={formik.touched.image && !!formik.errors.image}
          helperText={formik.touched.image && formik.errors.image}
        />

        <TextField
          fullWidth label="Video URL" name="videoUrl" margin="normal"
          value={formik.values.videoUrl} onChange={formik.handleChange}
          error={formik.touched.videoUrl && !!formik.errors.videoUrl}
          helperText={formik.touched.videoUrl && formik.errors.videoUrl}
        />

        <TextField
          fullWidth label="Description" name="description" multiline rows={3} margin="normal"
          value={formik.values.description} onChange={formik.handleChange}
          error={formik.touched.description && !!formik.errors.description}
          helperText={formik.touched.description && formik.errors.description}
        />

        <TextField
          fullWidth label="Rating (0-5)" name="rating" type="number" margin="normal"
          value={formik.values.rating} onChange={formik.handleChange}
          error={formik.touched.rating && !!formik.errors.rating}
          helperText={formik.touched.rating && formik.errors.rating}
        />

        <TextField
          fullWidth label="Number of Likes" name="numberOfLike" type="number" margin="normal"
          value={formik.values.numberOfLike} onChange={formik.handleChange}
          error={formik.touched.numberOfLike && !!formik.errors.numberOfLike}
          helperText={formik.touched.numberOfLike && formik.errors.numberOfLike}
        />

        <FormControlLabel
          control={<Switch name="isSpecial" checked={formik.values.isSpecial} onChange={formik.handleChange} />}
          label="🌟 Special Orchid"
        />

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">🌱 Orchid Type</FormLabel>
          <RadioGroup
            name="isNatural"
            value={formik.values.isNatural ? 'true' : 'false'}
            onChange={(e) => formik.setFieldValue('isNatural', e.target.value === 'true')}
            row
          >
            <FormControlLabel value="true" control={<Radio />} label="Natural" />
            <FormControlLabel value="false" control={<Radio />} label="Hybrid" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Add Orchid
        </Button>
      </form>
    </Box>
  );
};

export default AddOrchid;
