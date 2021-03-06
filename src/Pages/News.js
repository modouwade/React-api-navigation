import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Articles from "../components/Articles";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 140) {
      setError(true);
    } else {
      axios
        .post("http://localhost:3003/articles", {
          author: author,
          content: content,
          date: Date.now(),
        })
        .then(() => {
          setError(false);
          setAuthor("");
          setContent("");
          getData();
        });
    }
  };
  return (
    <div>
      <Navigation />
      <Logo />
      <div className="news-container">
        <h1>News</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <textarea
            style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
            placeholder="Message"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          {error && <p>Veuillez écrire un minimum de 140 caractére</p>}
          <input type="submit" value="Envoyer" />
        </form>
        <ul>
          {newsData
            .sort((a, b) => b.date - a.date)
            .map((article) => (
              <Articles key={article.id} article={article} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
