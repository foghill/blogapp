import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const renderList = () =>
    blogs.map((blog) => (
      <div className="item" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h2 className="ui button">{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
      </div>
    ));

  return (
    <div className="ui centered card">
      <h2>All Blogs</h2>
      <div className="content">{renderList()}</div>
    </div>
  );
};

export default BlogList;
