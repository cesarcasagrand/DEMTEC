import './Funcionalidades.css'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom';

function Funcionalidades() {

    return (
        <>

            <Header />

            <article>
                <div id="anuntopo">
                    <p>Uma operação mais ágil e eficiente!</p>
                    <h1>Conheça as principais funcionalidades da <span>DEMTEC</span> <br /> que refletem em maior qualidade operacional.</h1>
                    <Link to="/Contato"><button>Agendar Demonstração</button></Link>
                </div>

                <div id="">
                    <div id="gridbloco">
                        <div id="bloco1">
                            <img src="/bloco1.png" alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a32d" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <h1>Checklist</h1>
                            <h2>Fácil e rápido de preencher, os checklists se <br/> adequam a diversos tipos de serviços.</h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>

                        <div id="bloco1">
                            <div><img src="/bloco2.png" alt="" /></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a23d" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <h1>Relatórios Inteligentes</h1>
                            <h2>Relatórios gerados automaticamente após a <br/> finalização dos serviços no padrão da sua <br/> empresa com seu logo e cores. </h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>

                        <div id="bloco1">
                            <div><img src="/bloco3.png" alt="" /></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a32d" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
                            <h1>Abertura de Chamados</h1>
                            <h2>Página personalizada para a sua empresa  <br/> ondeseus clientes podem solicitar serviços de <br/> forma descomplicada</h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>

                        <div id="bloco1">
                            <div><img src="/bloco4.png" alt="" /></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a32d" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg><h1>Dados e Indicadores</h1>
                            <h2>Gráficos de fácil leitura para entender gargalos na operação, volume de trabalho e muito mais.</h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>

                        <div id="bloco1">
                            <div><img src="/bloco5.png" alt="" /></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a32d" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            <h1>Planos de Atividades</h1>
                            <h2>Agende automaticamente planos de manutenção, <br/> contratos e serviços e ganhe tempo na operação!</h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>

                        <div id="bloco1">
                            <div><img src="/bloco6.png" alt="" /></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#01a32d" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/></svg>
                            <h1>Pesquisa de Satisfação</h1>
                            <h2>Disparadas automaticamente após a execução do serviço <br/> com indicadores fáceis de analisar para você medir a reputação do seu negócio</h2>
                            <Link to="/Contato" id="saibamais">Saiba Mais</Link>
                        </div>
                    </div>
                </div>
            </article>
        

            <Footer />
    </>
    )
  }
  
export default Funcionalidades;