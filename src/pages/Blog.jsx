import React from "react";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-3 py-sm-5">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="d-none d-sm-block col-3">
            <div className="filter-card mb-3 p-3">
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
          <div className="col-12 col-sm-9">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
