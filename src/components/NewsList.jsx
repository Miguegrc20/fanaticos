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
        featured: true,
      },
      {
        id: 2,
        title: "Noticia 2",
        content: "Contenido de la noticia 2",
        date: "2023-10-14",
        featured: false,
      },
      {
        id: 3,
        title: "Noticia 3",
        content: "Contenido de la noticia 3",
        date: "2023-10-13",
        featured: true,
      },
      {
        id: 4,
        title: "Noticia 4",
        content: "Contenido de la noticia 4",
        date: "2023-10-12",
        featured: false,
      },
      {
        id: 5,
        title: "Noticia 5",
        content: "Contenido de la noticia 5",
        date: "2023-10-11",
        featured: false,
      },
      {
        id: 6,
        title: "Noticia 6",
        content: "Contenido de la noticia 6",
        date: "2023-10-10",
        featured: false,
      },
    ];

    const sortedNews = exampleNews.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const recentNews = sortedNews.slice(0, 5);
    setNews(recentNews);
  }, []);

  const featuredNews = news.filter((item) => item.featured);
  const regularNews = news.filter((item) => !item.featured);

  return (
    <div>
      <h2>Noticias destacadas</h2>
      {featuredNews.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}

      <h2>Noticias</h2>
      {regularNews.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
