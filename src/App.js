/* eslint-disable no-unreachable */
import './App.css';
import {Login} from'./Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppMain} from './AppMain';
import { QueryClient, QueryClientProvider} from 'react-query'
import {Registro} from'./Components/Registro';
import {DatosUsuario} from './Components/DatosUsuario'
import {ListaUsuarios} from './Components/ListaUsuarios'
import {EditarUsuario} from './Components/EditarUsuario'
import {Solicitudes} from './Components/Solicitudes';
import {EditarSolicitudes} from './Components/EditarSolicitudes';

const queryClient = new QueryClient()


function App() {
// eslint-disable-next-line no-unused-vars


  return (<QueryClientProvider client={queryClient}>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/main" element={<AppMain/>} />
              <Route path="/registro" element={<Registro/>} />
              <Route path="/datosuser" element={<DatosUsuario/>} />
              <Route path="/listausers" element={<ListaUsuarios/>} />
              <Route path="/editar" element={<EditarUsuario/>} />
              <Route path="/editsolicitudes" element={<EditarSolicitudes/>} />
              <Route path="/solicitudes" element={<Solicitudes/>} />
          </Routes>
          </BrowserRouter>

          </QueryClientProvider>
  );
}
export default App;
