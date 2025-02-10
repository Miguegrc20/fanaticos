import React from "react";
import logo from "../fanaticosLogo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="" />
      <h1>Bienvenido a F4NÁTICOS</h1>
      <p>Tu fuente confiable de noticias de fútbol.</p>
      <Link to="/news" className="btn">
        Ver Noticias Recientes
      </Link>
    </div>
  );
};

export default Home;
