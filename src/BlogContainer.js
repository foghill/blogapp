import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = ({ blogs, handleDeleteBlog,}) => {
  const blogItems = blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
      handleDeleteBlog={handleDeleteBlog}
    />
  ));
  return <div>{blogItems}</div>;
};

export default BlogContainer;
