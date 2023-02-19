import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blog Name"} />
      <BreadCrumb title="Blog Name" />
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center"> <HiOutlineArrowLeft /> &nbsp; Go back to Blogs</Link>
                <h3 className="title">A Beautiful Sunday morning Renaissance</h3>
                <img className="img-fluid w-100 my-4" src="/images/blog-1.jpg" alt="blog" />
                <p>You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money. You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money. You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlog