import React from 'react'

const BlogCard2 = ({blog}) => {
    const {title,author,body} = blog
  return (
    <div class="ui text container">
      <article>
        <h2>{title}</h2>
        <p>Written by {author}</p>
        <p>{body}</p>
        <button class="ui red basic button">
          Delete
        </button>
      </article>
    </div>
  )
}

export default BlogCard2