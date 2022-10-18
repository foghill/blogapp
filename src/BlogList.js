import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="ui fluid container">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="item" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 class='ui orange basic button'>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;