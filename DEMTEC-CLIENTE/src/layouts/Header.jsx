import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Função para verificar se a página atual é a mesma que o link
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            <Link to="/"><div className="verde"></div></Link>

            <section id="menu">
                <div id="menuflex">
                    <div id="logo">
                        <Link to="/Login"><img src="/logo-png.png" alt="Logo da header" width="140px" height="auto"/></Link>
                    </div>
                    <div id="itensmenu">
                        <ul>
                            <li id="home"><Link to="/" className={isActive('/')}><span>Home</span></Link></li>
                            <li id="func" className={isActive('/Funcionalidades')}><Link to="/Funcionalidades" className={isActive('/Funcionalidades')}><span>Funcionalidades</span></Link></li>
                            <li id="sobre" className={isActive('/Quem-Somos')}><Link to="/Quem-Somos" className={isActive('/Quem-Somos')}><span>Quem Somos</span></Link></li>
                            <li id="seg" className={isActive('/Segmentos')}><Link to="/Segmentos" className={isActive('/Segmentos')}><span>Segmentos</span></Link></li>
                        </ul>
                    </div>
                    <div id="svg" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#000000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                        </svg>
                        <div id="dropmenu" className={isDropdownVisible ? 'show' : ''}>
                            <div id="fotoperfil"></div>
                            <ul id="droplista">
                                <li>Email<h1>xxxxxxx@xxxxx.com</h1></li>
                                <li>Usuário<h1>xxxxxxxx</h1></li>
                                <li>Empresa<h1>xxxxxxxx</h1></li>
                                <li>Agenda</li>
                                <li>Configurações</li>
                                <li id="libaixo">Suporte</li>
                                <li>Sair</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
