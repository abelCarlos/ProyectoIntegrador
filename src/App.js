import './App.css';
import {Upload} from'./Components/Upload';
import {Home} from'./Components/Home';
import {Login} from'./Components/Login';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
          <Navbar/>
          <header className="App-header">
            <Routes>            
                <Route path="/" element={<Home/>} />
                <Route path="/upload" element={<Upload/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
          </header>          
    </div>
      
  );
}

export default App;
