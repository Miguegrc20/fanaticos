import React from "react";
import { Link } from "react-router-dom";
import NewsList from "../components/NewsList";

const News = () => {
  return (
    <div className="news-page">
      <h1>Noticias Recientes</h1>
      <NewsList />
      <Link to="/" className="btn">
        Regresar a Inicio
      </Link>
    </div>
  );
};

export default News;
