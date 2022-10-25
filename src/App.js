import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogCard from "./BlogDetails";
import BlogContainer from "./BlogContainer";
import BlogList from "./BlogList";
import Home from "./Home";
import NotFound from "./NotFound";
import Cat from "./Cat.js";
import Counter from "./Counter.js";
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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route
              path="/blogcontainer"
              element={
                <BlogContainer
                  blogs={blogs}
                  onAddBlog={handleAddBlog}
                  handleDeleteBlog={handleDeleteBlog}
                />
              }
            />
            <Route path="/create" element={<Create onAddBlog={handleAddBlog} blogs={blogs}/>} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogCard blogs={blogs}  handleDeleteBlog={handleDeleteBlog}/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="cat" element={<Cat />} />
            <Route path="counter" element={<Counter />} />
            <Route path="404" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
