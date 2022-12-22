/* eslint-disable no-unreachable */
import './App.css';
import {Login} from'./Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppMain} from './AppMain';
import {Registro} from'./Components/Login/Registro';
import {ListaUsuarios} from './Components/Usuario/ListaUsuarios';
import {EditarUsuario} from './Components/Usuario/EditarUsuario';
import {EditarSolicitudes} from './Components/Solicitudes/EditarSolicitudes';
import {ErrorPage} from './Components/ErrorPage';


function App() {
// eslint-disable-next-line no-unused-vars

  const token = localStorage.getItem('token')
  console.log(token)
  return (
          <BrowserRouter>
              <Routes>
              <Route path="*" element={<ErrorPage/>} />
              <Route path="/" element={<Login/>} />
              <Route path='/main/*' element={<AppMain/>}/>
              <Route path="/registro" element={<Registro/>} />
            </Routes>
            
          </BrowserRouter>
  );
}
export default App;
