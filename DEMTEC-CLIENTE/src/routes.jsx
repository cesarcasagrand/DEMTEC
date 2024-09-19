import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Funcionalidades from './pages/funcionalidades';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import Segmentos from './pages/segmentos';
import Login from './pages/login';
import Esqueceu from './pages/esqueceusenha';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Funcionalidades" element={<Funcionalidades />} ></Route>
                <Route path="/Contato" element={<Contato />} ></Route>
                <Route path="/Quem-Somos" element={<Sobre />} ></Route>
                <Route path="/Segmentos" element={<Segmentos />} ></Route>
                <Route path="/Login" element={<Login />} ></Route>
                <Route path="/EsqueceuSenha" element={<Esqueceu />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;