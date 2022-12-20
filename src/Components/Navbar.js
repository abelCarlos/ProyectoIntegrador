import * as React from 'react';

import './../App.css';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">        
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
            <NavLink className="link" to="/">Inicio</NavLink>
            <NavLink className="link" to="/upload">Cargar</NavLink>
            <Typography className="tp" variant="h6"  component="div" sx={{ flexGrow: 1 }}> Clasificacion </Typography>
            <NavLink className="link" to="/Login">Login</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    </div>

    
  );
}
  export default Navbar;
  