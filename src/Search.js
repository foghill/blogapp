import React from "react";
import { Link } from "react-router-dom";

export default function Search({ blogs, setBlogs }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = blogs.filter((blog) =>
      blog.author.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="ui header center aligned container">
      <br></br>
      <input
        type="text"
        placeholder="Search by Author"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        <br />
        {searchResults.map((blog) => (
          <Link to={`/blogs/${blog.id}`}>
            <h2 key={blog.id}>{blog.author}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

//search function with dropdown to select blogs by author, dropdown list of all current authors, rendered on BlogList page
