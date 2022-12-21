/* eslint-disable no-unreachable */
import './App.css';
import {Login} from'./Components/Login';
import { Route, Routes } from 'react-router-dom';
import {AppMain} from './AppMain';
import { QueryClient, QueryClientProvider} from 'react-query'
import {Registro} from'./Components/Registro';


const queryClient = new QueryClient()


function App() {
// eslint-disable-next-line no-unused-vars


  return (<QueryClientProvider client={queryClient}>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/main" element={<AppMain/>} />
              <Route path="/registro" element={<Registro/>} />
          </Routes>
          </QueryClientProvider>
  );
}
export default App;
