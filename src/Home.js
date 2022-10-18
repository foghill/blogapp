import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const API = "http://localhost:8000/blogs";

const Home = () => {
  const { data: blogs } = useFetch(API);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} />
    </div>
  );
};

export default Home;
