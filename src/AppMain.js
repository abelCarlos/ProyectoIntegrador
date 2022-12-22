import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Upload} from'./Components/Upload';
import {Registro} from './Components/Login/Registro';
import {Home} from './Components/Home';
import {Navbar} from './Components/Navbar';
import {Solicitudes} from './Components/Solicitudes/Solicitudes';
import {DatosUsuario} from './Components/Usuario/DatosUsuario';


export function AppMain() {
  
  return (
    <div className="App">
      <div className="App-header">
          <Navbar/>
          <Routes>
                <Route path="upload" element={<Upload/>}/>
                <Route path="registro" element={<Registro/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="datosuser" element={<DatosUsuario/>} />
                <Route path="solicitudes" element={<Solicitudes/>} />
          </Routes>
           
      </div>
    </div>
  );
}
export default AppMain;
