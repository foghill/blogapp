import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch("http://localhost:8000/blogs/"+ id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/`+ blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate.push("/");
    });
  };


  return (
    <div class="ui text container">
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <p>{blog.body}</p>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
};

export default BlogDetails;
