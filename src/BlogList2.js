import React from 'react'
import BlogCard2 from './BlogCard2';

const BlogList2 = ({blogs}) => {
    const blogCards = blogs.map((blog)=>{
        return <BlogCard2 key ={blog.id} blog={blog} />;
    })
  return (
    <div>{blogCards}</div>
  )
}

export default BlogList2