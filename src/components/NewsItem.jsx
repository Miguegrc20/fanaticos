import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <small>Publicado el: {new Date(news.date).toLocaleDateString()}</small>
    </div>
  );
};

export default NewsItem;
