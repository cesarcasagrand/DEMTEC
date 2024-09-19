import React, { useState } from 'react';
import './login.css';
import Footer from '../../layouts/Footer';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Usuário:', username);
    console.log('Senha:', password);

    if (username && password) {
      navigate('/'); 
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <>
      <div className="verde"></div>

        <div id="meio">
            <div id="logologin">
            <img src="logo.jpg" alt="Logo" />
            </div>

            <form id="logar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">ENTRAR</button>
                <Link to="/EsqueceuSenha"><h1>Esqueci minha senha</h1></Link>
            </form>

        </div>

      <Footer />
    </>
  );
}

export default Login;
