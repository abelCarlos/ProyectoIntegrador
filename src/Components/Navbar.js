import * as React from 'react';

import './../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ListItemIcon } from '@mui/material';
import { useQuery } from 'react-query'
import {ApiLogin} from '../Api/ApiLogin';
import LogoutIcon from '@mui/icons-material/Logout';


export const Navbar = () => {

  const navigate = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem("token");
    navigate("/");
  };
  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["login"],()=> ApiLogin(token).post())
  if(isLoading){
      console.log("cargando");
        return <p>
          cargando
        </p>
    }
    console.log(data);
  return (
    <div className="navbar">
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="absolute">
        <Toolbar>
            <Link className="link" to=''>Home</Link>
            <Link className="link" to='datosuser'>Usuario</Link>
            <Link className="link" to='listausers'>Usuarios</Link>
            <Link className="link" to='upload'>Cargar</Link>
            <Link className="link" to='solicitudes'>solicitudes</Link>
            {/* <Link className="link" to='editar'>Editar usuario</Link>
            <Link className="link" to='crearsolicitud'>Crear Solicitud</Link> */}
            <Typography className="tp" variant="h6"  component="div" sx={{ flexGrow: 1 }}> Clasificacion </Typography>
            {/* <p>{data.email}</p> */}
            <ListItemIcon>
              <LogoutIcon className="link" onClick={Logout}>
              Logout
            </LogoutIcon>
            </ListItemIcon>
            
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
  export default Navbar;
  