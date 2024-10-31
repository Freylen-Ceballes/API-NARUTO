import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
  return (
    <Box id='div-bar'>
      <AppBar position="static" sx={{ width: '100%', backgroundColor: 'black', height: { xs: 80, sm: 130 }, justifyContent: 'center' }}>
        <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img id='logo' src="https://img6.arthub.ai/6513e6b7-bf98.webp" alt="Naruto Logo" />
            <Typography variant="h6" id='titulo-home'>
              NARUTO APP
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} to="/favorites">
              Favoritos
            </Button>
            <Button color="inherit" component={Link} to="/about">
              A cerca de
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

