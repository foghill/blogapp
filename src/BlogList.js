import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div class="ui centered card">
      <div class="content">
        {blogs.map((blog) => (
          <div className="item" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2 class="ui button">{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
        <div class="header">{blogs.title}</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">{blogs.author}</h4>
        <div class="extra content" />
      </div>
    </div>
  );
};

export default BlogList;
