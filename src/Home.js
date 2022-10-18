import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="ui center aligned container">
      <BlogList blogs={blogs} title={"All Blogs"} />
    </div>
  );
};

export default Home;
