import {Link} from "react-router-dom";

const BlogList = ({blogs}) => {

    const renderList = () =>
        blogs.map((blog) => (
            <div className="item" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2 className="ui button">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </div>
        ));


//search function with dropdown to select blogs by author, dropdown list of all current authors, rendered on BlogList page


//rerecord application - app only
//rewrite blog - state - react useState hook, controlled forms - 1.add state to form, 2. add state in project in general (import)
//purpose of State - how to update State, dive deep into updateFunction,useState within component. what happens after form is submitted
//use my application as reference point for blog
//repository - update Readme - makeareadme.com
// state,react hooks

//knowledge gaps around state
//

//sched instructor call


    return (
        <div className="ui centered card">

            <h2>All Blogs</h2>
            <div className="content">{renderList()}</div>
        </div>
    );
};

export default BlogList;
