import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">9 FEBRUARY 2022</p>
          <h5 className="title"> A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...</p>
          <Link to="/blog/:id" className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogCard