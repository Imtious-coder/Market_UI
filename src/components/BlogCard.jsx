import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const blogData = [
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
    {
      image: "images/blog-1.jpg",
      date: "9 FEBRUARY 2022",
      title: "A Beautiful Sunday Morning Renaissance",
      description:
        "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
    },
  ];
  return (
    <>
      <div className="row m-0">
        {blogData?.map(({ image, title, date, description }, index) => {
          return (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center"
            >
              <div className="blog-card">
                <div className="card-image">
                  <img src={image} className="img-fluid" alt="blog" />
                </div>
                <div className="blog-content">
                  <p className="date">{date}</p>
                  <h5 className="title">{title} </h5>
                  <p className="desc">{description} </p>
                  <Link to="/blog/:id" className="button">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
