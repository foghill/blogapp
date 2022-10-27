import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogCard = ({ handleDeleteBlog }) => {
  //this components gets called using a Link passing in the URl. the blog's id is in the URL as a parameter.

  const { id } = useParams();
  //extract id
  const { data: blog } = useFetch(`http://localhost:8000/blogs/${id}`);
  //get blog by pass in the id to the useFetch hook
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        handleDeleteBlog(blog);
      })
      .then(() => {
        navigate("/");
      });
  };

  if (!blog) {
    return (<div>loading...</div>)
  }

  return (
    <div className="ui text container">
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <p>{blog.body}</p>
        <button onClick={handleDelete} className="ui red basic button">
          Delete
        </button>
      </article>
    </div>
  );
};

export default BlogCard;
