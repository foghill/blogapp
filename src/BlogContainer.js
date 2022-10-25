import React from "react";
import BlogDetails from "./BlogDetails";

const BlogContainer = ({ blogs, handleDeleteBlog,}) => {
  const blogItems = blogs.map((blog) => (
    <BlogDetails
      key={blog.id}
      blog={blog}
      handleDeleteBlog={handleDeleteBlog}
    />
  ));
  return <div>{blogItems}</div>;
};

export default BlogContainer;
