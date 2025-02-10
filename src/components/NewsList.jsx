import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Datos de ejemplo
    const exampleNews = [
      {
        id: 1,
        title: "Noticia 1",
        content: "Contenido de la noticia 1",
        date: "2023-10-15",
      },
      {
        id: 2,
        title: "Noticia 2",
        content: "Contenido de la noticia 2",
        date: "2023-10-14",
      },
      {
        id: 3,
        title: "Noticia 3",
        content: "Contenido de la noticia 3",
        date: "2023-10-13",
      },
      {
        id: 4,
        title: "Noticia 4",
        content: "Contenido de la noticia 4",
        date: "2023-10-12",
      },
      {
        id: 5,
        title: "Noticia 5",
        content: "Contenido de la noticia 5",
        date: "2023-10-11",
      },
      {
        id: 6,
        title: "Noticia 6",
        content: "Contenido de la noticia 6",
        date: "2023-10-10",
      },
    ];

    // Ordenar noticias por fecha (de más reciente a más antigua)
    const sortedNews = exampleNews.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    // Limitar a las 5 noticias más recientes
    const recentNews = sortedNews.slice(0, 5);
    setNews(recentNews);
  }, []);

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
