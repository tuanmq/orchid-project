import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditOrchid = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
      image: Yup.string().url('Invalid URL').required('Image is required'),
      videoUrl: Yup.string().url('Invalid URL'),
      description: Yup.string().required('Description is required').min(10),
      rating: Yup.number().min(0).max(5).required(),
      numberOfLike: Yup.number().min(0).required(),
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, values);
        alert('Orchid updated successfully!');
        navigate('/');
      } catch (err) {
        alert('Failed to update orchid!');
        console.error(err);
      }
    }
  });

  // Load data orchid
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((res) => {
        formik.setValues(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert('Orchid not found!');
        console.error(err);
        navigate('/');
      });
  }, [id]);

  if (loading) return <p>Loading Orchid data...</p>;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Edit Orchid</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth label="Name" name="name" margin="normal" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && !!formik.errors.name} helperText={formik.errors.name} />
        <TextField fullWidth label="Origin" name="origin" margin="normal" value={formik.values.origin} onChange={formik.handleChange} error={formik.touched.origin && !!formik.errors.origin} helperText={formik.errors.origin} />
        <TextField fullWidth label="Color" name="color" margin="normal" value={formik.values.color} onChange={formik.handleChange} error={formik.touched.color && !!formik.errors.color} helperText={formik.errors.color} />
        <TextField fullWidth label="Category" name="category" margin="normal" value={formik.values.category} onChange={formik.handleChange} error={formik.touched.category && !!formik.errors.category} helperText={formik.errors.category} />
        <TextField fullWidth label="Image URL" name="image" margin="normal" value={formik.values.image} onChange={formik.handleChange} error={formik.touched.image && !!formik.errors.image} helperText={formik.errors.image} />
        <TextField fullWidth label="Video URL" name="videoUrl" margin="normal" value={formik.values.videoUrl} onChange={formik.handleChange} error={formik.touched.videoUrl && !!formik.errors.videoUrl} helperText={formik.errors.videoUrl} />
        <TextField fullWidth multiline rows={3} label="Description" name="description" margin="normal" value={formik.values.description} onChange={formik.handleChange} error={formik.touched.description && !!formik.errors.description} helperText={formik.errors.description} />
        <TextField fullWidth label="Rating" name="rating" type="number" margin="normal" value={formik.values.rating} onChange={formik.handleChange} error={formik.touched.rating && !!formik.errors.rating} helperText={formik.errors.rating} />
        <TextField fullWidth label="Number of Likes" name="numberOfLike" type="number" margin="normal" value={formik.values.numberOfLike} onChange={formik.handleChange} error={formik.touched.numberOfLike && !!formik.errors.numberOfLike} helperText={formik.errors.numberOfLike} />

        <FormControlLabel
          control={<Switch name="isSpecial" checked={formik.values.isSpecial} onChange={formik.handleChange} />}
          label="Special Orchid"
        />

        <FormControl sx={{ mt: 2 }}>
          <FormLabel>Orchid Type</FormLabel>
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
          Update Orchid
        </Button>
      </form>
    </Box>
  );
};

export default EditOrchid;
