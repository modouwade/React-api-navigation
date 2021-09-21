import axios from "axios";
import React, { useState } from "react";
import DeleteArticle from "./DeleteArticle";

const Articles = (props) => {
  const { article } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState("");
  const dateParser = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const data = {
    author: article.author,
    content: editingContent ? editingContent : article.content,
    date: article.date,
  };

  const handleEdite = () => {
    axios.put("http://localhost:3003/articles/" + article.id, data);
    setIsEditing(false);
  };
  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          autoFocus
          defaultValue={editingContent ? editingContent : article.content}
          onChange={(e) => setEditingContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editingContent ? editingContent : article.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdite}>Update</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <DeleteArticle id={article.id} />
      </div>
    </div>
  );
};

export default Articles;
