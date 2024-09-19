import React from "react";
import './Home.css';
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const data = [
    {
      id: 1,
      title: "1",
      description: "Receba solicitações do serviço em segundos",
    },
    {
      id: 2,
      title: "2",
      description: "Gerencie clientes de forma eficiente",
    },
    {
      id: 3,
      title: "3",
      description: "Relatórios detalhados em tempo real",
    },
    {
      id: 4,
      title: "4",
      description: "Melhore a comunicação com sua equipe",
    },
];

function Home () {

    return (
        <>

            <Header />

            <article>
                <div id="anuncio1">
                    <div id="flexanun1">
                        <h1>Fácil <br /> para técnico, <br /> para o gestor<br />e para o cliente.</h1>
                        <h2>Aplicativo para você elaborar, <br /> executar e comprovar seus serviços</h2>
                    </div>

                    <div id="img"><img src="/anuncio2.jpg" alt="" width="600px" height="400px"/></div>
                </div>

                <div id="anuncio2">
                    <div id="img1"><img src="/anuncio1.jpg" alt=""  width="450px" height="520px" /></div>
                    <div id="flexanun2">
                        <h1>Seus clientes irão se <br /> encantar com tanta<br /> qualidade operacional</h1>
                        <Link to="/Funcionalidades"><button>Ver funcionalidades</button></Link>
                        <Link to="/Contato"><button>Agendar Demonstração</button></Link>
                    </div>
                </div>


                <div className="container">
                <Link to="/Funcionalidades" >Funcionalidades do Aplicativo</Link>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        loop={true}
                    >
                        {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="slide-item">
                            <div className="circle">
                                <h1 >{item.title}</h1>
                            </div>
                            <h2>{item.description}</h2>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                {/*<div id="anuncio3">
                    <p>Funcionalidades do Aplicativo</p>
                     <Swiper>
                        <SwiperSlide>
                            
                            
                        </SwiperSlide>
                    </Swiper>   
                    
                    {/*<div id="carousel">
                                <div className="item">
                                    <h1 id="num1">1</h1>
                                    <h2>Receba solicitações do serviço em segundos</h2>
                                </div>
                                <div className="item">
                                    <h1 id="num2">2</h1>
                                    <h2>Gerencie clientes de forma eficiente</h2>
                                </div>
                                <div className="item">
                                    <h1 id="num3">3</h1>
                                    <h2>Relatórios detalhados em tempo real</h2>
                                </div>
                                <div className="item">
                                    <h1 id="num4">4</h1>
                                    <h2>Melhore a comunicação com sua equipe</h2>
                                </div>
                        </div>
                    <button className="carousel-btn prev">&#10094;</button>
                    <button className="carousel-btn next">&#10095;</button>*/}

            </article>

            <Footer />
        </>
    );
};

export default Home;
