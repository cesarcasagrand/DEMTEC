import React, { useState } from 'react'
import './contato.css'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'

function Contato() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        empresa: '',
        whatsapp: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Formulário enviado com sucesso!');
    };

    return (
        <>

        <Header />

        <div id="titipren">
            <span >Preencha o formulário para que possamos entrar em contato e <br />agendar uma demonstração do aplicativo para você.</span>
        </div>
        <form id="enviacontato" onSubmit={handleSubmit}>
            <div className="flexform">
                <p>Seu nome:</p>
                <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleInputChange}
                />
            </div>

            <div className="flexform">
                <p>Seu e-mail profissional:</p>
                <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleInputChange}
                />
            </div>

            <div className="flexform">
                <p>Seu número de celular:</p>
                <input
                type="text"
                name="whatsapp"
                placeholder="Digite o número"
                value={formData.whatsapp}
                onChange={handleInputChange}
                />
            </div>

            <div className="flexform">
                <p>Nome da empresa a qual trabalha:</p>
                <input
                type="text"
                name="empresa"
                placeholder="Digite o nome da empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                />
            </div>

            <button id="btnform" type="submit">Enviar Pedido</button>
        </form>


        <Footer />
    </>
    )
  }
  
export default Contato;