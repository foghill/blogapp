import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogCard = ({ blogs, handleDeleteBlog }) => {
  const { id } = useParams();
  console.log(id);
  const blogPage = blogs.find((b) => b.id == id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        handleDeleteBlog(blogPage);
      })
      .then(() => {
        navigate("/");
      });
  };

  if (!blogPage) {
    return <div>loading...</div>;
  }

  return (
    <div className="ui text container">
      <article>
        <h2>{blogPage.title}</h2>
        <p>Written by {blogPage.author}</p>
        <p>{blogPage.body}</p>
        <button onClick={handleDelete} className="ui red basic button">
          Delete
        </button>
      </article>
    </div>
  );
};

export default BlogCard;
