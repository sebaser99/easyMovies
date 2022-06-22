import { Login } from "./components/Login";
import { Routes, Route, } from "react-router-dom";
import { Listado } from "./components/Listado";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

//Styles
import './styles/bootstrap.min.css';
import './styles/App.css';

const token = localStorage.getItem('token');

function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
      <Footer/>
   </>
      
  )
}

export default App
