import React, { useState } from 'react';
import ListOfOrchids from '../data/ListOfOrchids';
import OrchidItem from './Orchids/OrchidItem';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 

const NaturalOrchidPage = () => {
  const [tab, setTab] = useState(0);
  const theme = useTheme(); 

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const filteredOrchids = ListOfOrchids.filter(
    (o) => (tab === 0 ? o.isNatural : !o.isNatural)
  );

  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        padding: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        🌿 Orchid Types
      </Typography>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="Natural Orchids" />
        <Tab label="Hybrid Orchids" />
      </Tabs>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 3,
          marginTop: 3,
        }}
      >
        {filteredOrchids.map((orchid) => (
          <OrchidItem key={orchid.id} orchid={orchid} />
        ))}
      </Box>
    </Box>
  );
};

export default NaturalOrchidPage;
