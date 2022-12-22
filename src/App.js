/* eslint-disable no-unreachable */
import './App.css';
import {Login} from'./Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppMain} from './AppMain';
import {Registro} from'./Components/Login/Registro';
import {ErrorPage} from './Components/ErrorPage';


function App() {
// eslint-disable-next-line no-unused-vars

  const token = localStorage.getItem('token')
  console.log(token)
  return (
          <BrowserRouter>
              <Routes>
              <Route path="*" element={<ErrorPage/>} />
              <Route path="/main" component={()=>{
                return token ? <navigate to='/main/*' />  : <Login/>
              }} element={<AppMain/>} />
              <Route path='/' element={<Login/>}/>
              <Route path='/main/*' element={<AppMain/>}/>
              <Route path="/registro" element={<Registro/>} />
            </Routes>
          </BrowserRouter>
  );
}
export default App;
