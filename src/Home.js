import React from 'react'
import BlogList from './BlogList.js'

const Home = ({blogs}) => {
  return (
    <div className="ui center aligned container">
        <p></p>
        <BlogList blogs={blogs} title={"All Blogs"} />
    </div>
  )
}

export default Home