import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import {Upload} from'./Components/Upload';
import {Registro} from './Components/Registro';
import { Home } from './Components/Home';
import { useQuery } from 'react-query'
import {ApiLogin} from './Api/ApiLogin';


export function AppMain() {

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
          <Navbar nombre={data.email}/>
          <div className="App-header">
            <p>hol</p>
          <Routes>
                <Route path="/upload" element={<Upload/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/home" element={<Home/>} />
          </Routes>
          </div>
    </div>
  );
}

export default AppMain;
