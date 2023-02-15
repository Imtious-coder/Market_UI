import React from 'react'
import BlogCard from '../components/BlogCard'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="col-9">
              <div className="row gy-4">
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
                <div className="col-6">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog