import { FC, useEffect, useState } from 'react';

// Mui components.
import { AppBar as MuiAppBar, Container, IconButton, Typography, Box } from '@mui/material';
import tngs from '@/assets/images/tngs.jpeg';

// Config.
import { AppConfig } from '@/config';
import { grey } from '@mui/material/colors';

const AppBar: FC = () => {
  const [zIndex, setZIndex] = useState<number>(3);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck > 60) {
        setZIndex(1);
      } else {
        setZIndex(3);
      }
    });
  }, []);

  return (
    <MuiAppBar elevation={0} color="transparent" sx={{ py: 5, zIndex }}>
      <Container sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h2" component="h1" color="primary.contrastText" sx={{ mb: 1 }}>
            {AppConfig.appName}
          </Typography>
          <Typography sx={{ color: grey[100] }}>{AppConfig.appDescription}</Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <a href={AppConfig.appRepo} target="_blank">
            <IconButton>
              <img src={tngs} alt="TNGS Logo" width="40px" height="40px"/>
            </IconButton>
          </a>
        </Box>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
