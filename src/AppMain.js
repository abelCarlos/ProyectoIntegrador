import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Upload} from'./Components/Upload';
import {Registro} from './Components/Login/Registro';
import {Home} from './Components/Home';
import {Navbar} from './Components/Navbar';
import {Solicitudes} from './Components/Solicitudes/Solicitudes';
import {DatosUsuario} from './Components/Usuario/DatosUsuario';
import {EditarSolicitudes} from './Components/Solicitudes/EditarSolicitudes';
import {ListaUsuarios} from './Components/Usuario/ListaUsuarios';
import {ErrorPage} from './Components/ErrorPage';
import EditarUsuario from './Components/Usuario/EditarUsuario';


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
                <Route path="solicitudes/*" element={<Solicitudes/>}>
                  <Route path="editsolicitudes" element={<EditarSolicitudes/>} />
                </Route>
              <Route path="editar" element={<EditarUsuario/>} />              
              <Route path="listausers" element={<ListaUsuarios/>} />
          </Routes>
           
      </div>
    </div>
  );
}
export default AppMain;
