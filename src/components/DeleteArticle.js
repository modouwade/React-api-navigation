import axios from "axios";
import React from "react";

const DeleteArticle = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3003/articles/" + id);
    window.location.reload();
  };
  return (
    <div>
      <button
        onClick={() => {
          if (window.confirm("Do you want to delete?")) {
            handleDelete();
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteArticle;
