import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = ({ blogs, onDeleteBlog, onAddBlog }) => {
  const blogItems = blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
      onAddBlog={onAddBlog}
      onDeleteBlog={onDeleteBlog}
    />
  ));
  return <div>{blogItems}</div>;
};

export default BlogContainer;
