import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ onAddBlog }) => {
  const navigate = useNavigate();
  const [blogObj, setBlogObj] = useState({
    title: "",
    body: "",
    author:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObj),
    })
      .then(() => {
        onAddBlog(blogObj);
      })
      .then(() => {
        navigate("/");
      });
  };

  const onChangeHandler = (e) => {
    setBlogObj({
      ...blogObj,
      [e.target.name]: e.target.value,
    });
  };
  console.log(blogObj);

  return (
    <div className="ui form container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          onChange={onChangeHandler}
          name="title"
          type="text"
          required
          value={blogObj.title}
          
        />
        <label>Blog Body:</label>
        <textarea
          name="body"
          type="text"
          value={blogObj.body}
          onChange={onChangeHandler}
        />
        <label>Blog author:</label>
        <input
          name="author"
          type="text"
          value={blogObj.author}
          onChange={onChangeHandler}
        />
        {<button className="ui primary button">Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
