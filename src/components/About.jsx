import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles'; 

const About = () => {
  const theme = useTheme(); 

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: 'auto',
        padding: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary, 
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
        About Orchid World
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.primary }}>
            At Orchid World, we are passionate about curating the finest orchid species and delivering beauty to your home.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Our Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.primary }}>
            We offer a wide range of orchids from natural to hybrid types, hand-picked and quality-tested.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Contact Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.primary }}>
            Email: tuanmqse1705652@fpt.edu.vn<br />
            Phone: 0842494586
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default About;
