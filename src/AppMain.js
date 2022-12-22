import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import {Upload} from'./Components/Upload';
import {Registro} from './Components/Registro';
import { Home } from './Components/Home';
import { useQuery } from 'react-query'
import {ApiLogin} from './Api/ApiLogin';
import { AppBar, Box, Button, CardContent, Toolbar, Typography } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';


import { useNavigate } from "react-router-dom";

export function AppMain() {
  const navigate = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem("token");
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
    <div className="App">
      <CardContent>
         <div className="navbar">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
              <Toolbar>
                  <Link className="link" to="/home">Home</Link>
                  <Link className="link" to="/upload">Cargar</Link>
                  <Typography className="tp" variant="h6"  component="div" sx={{ flexGrow: 1 }}> Clasificacion </Typography>
                  <p>{data.email}</p>
                  <Button variant="contained" onClick={()=>Logout(navigate("/"))}>
                    Logout
                  </Button>
              </Toolbar>
            </AppBar>
          </Box>
          </div>
          <Routes>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/home" element={<Home/>}/>
          </Routes>
      </CardContent>
    </div>
  );
}

export default AppMain;
