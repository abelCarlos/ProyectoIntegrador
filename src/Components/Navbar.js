import * as React from 'react';

import './../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


export const Navbar = ({nombre}) => {

  const navigate = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem("token");
  };
  return (
    <div className="navbar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
            <NavLink className="link" to="/home">Home</NavLink>
            <NavLink className="link" to="/upload">Cargar</NavLink>
            <Typography className="tp" variant="h6"  component="div" sx={{ flexGrow: 1 }}> Clasificacion </Typography>
            <text>{nombre}</text>
            <Button variant="contained" onClick={()=>Logout(navigate("/"))}>
              Link
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
  export default Navbar;
  