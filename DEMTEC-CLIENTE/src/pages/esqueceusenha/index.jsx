import React, { useState } from 'react';
import './esqueceusenha.css';
import Footer from '../../layouts/Footer';
import { Link, useNavigate } from 'react-router-dom';

function EsqueceuSenha() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const navigate = useNavigate();

  const handleCPFChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    setCPF(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Usuário:', username);
    console.log('Email:', email);
    console.log('CPF:', cpf);

    if (username && email && cpf) {
      navigate('/'); 
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <>
      <div className="verde"></div>

        <div id="meioo">
            <div id="logologin">
            <img src="logo.jpg" alt="Logo" />
            </div>

            <form id="logar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuário de acesso"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={handleCPFChange}
                />
                <button type="submit">ENVIAR</button>
                <Link to="/login"><h2>Voltar</h2></Link>
            </form>

        </div>

      <Footer />
    </>
  );
}

export default EsqueceuSenha;
