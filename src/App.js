import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Inicio from './pages/Inicio';
import Footer from './pages/footer';
import Reservar from './pages/Reservar';
import Nosotros from './pages/Nosotros';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Experiencias from "./pages/Experiencias";
import Error404 from "./pages/Error404";


//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="text-light bg-dark wh-100">

<BrowserRouter>
<Header />


<Routes>

<Route path="/" element={<Inicio />}/>
<Route path="/Reservar" element={<Reservar />}/>
<Route path="/Experiencias" element={<Experiencias />}/>
<Route path="/Nosotros" element={<Nosotros />}/>
<Route path="/*" element={<Error404 />}/>
</Routes>

<Footer />
</BrowserRouter>
 


    </div>
  );
}

export default App;

