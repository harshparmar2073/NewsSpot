import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=03757ea10520496691efdb6b933e1e0e`

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch articles");
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetched articles data:", data); // Logging the fetched data
          setArticles(data.articles);
        })
        .catch(err => {
          console.error("Error fetching articles:", err); // Logging the error
          setError(err.message);
        });
    };

    fetchArticle();
  }, [category]);

  const renderArticles = articles.map((articles, index) => (
    <NewsItem
      key={index}
      title={articles.title}
      description={articles.description}
      src={articles.urlToImage}
      url={articles.url}
    />
  ));

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="d-flex flex-wrap justify-content-center">
        {renderArticles.length > 0 ? (
          renderArticles
        ) : (
          <p className="text-center">No news articles available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
