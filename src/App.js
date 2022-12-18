import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogPage from "./BlogPage";
import BlogList from "./BlogList";
import NotFound from "./NotFound";
import Search from "./Search";
import About from "./About";
// import Cat from "./Cat.js";
// import Counter from "./Counter.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((r) => r.json())
      .then(setBlogs);
  }, []);

  function handleAddBlog(newBlog) {
    setBlogs([...blogs, newBlog]);
  }

  function handleDeleteBlog(blogToDelete) {
    const updatedBlogs = blogs.filter((blog) => blog.id !== blogToDelete.id);
    setBlogs(updatedBlogs);
  }

  console.log(blogs);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<BlogList blogs={blogs} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/create"
              element={<Create onAddBlog={handleAddBlog} blogs={blogs} />}
            />
            <Route
              path="/blogs/:id"
              element={
                <BlogPage blogs={blogs} handleDeleteBlog={handleDeleteBlog} />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/search" element={<Search blogs={blogs} setBlogs={setBlogs}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
