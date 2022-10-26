import React from 'react'

const BlogList2 = ({blogs}) => {
    const blogCards = blogs.map((blog)=>{
        return <BlogCard2 key ={blog.id} />;
    })
  return (
    <div>{blogCards}</div>
  )
}

export default BlogList2