import React from "react";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BlogCard from "../components/BlogCard";
import Categories from "../components/Categories";
import Container from "../components/Container";
import Famous from "../components/Famous";
import FeaturedCollections from "../components/FeaturedCollections";
import FlashSale from "../components/FlashSale";
import Hero from "../components/Hero";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  const isLoggedIn = localStorage.getItem("auth-token");
  console.log(isLoggedIn, "FOUND ONE");
  return (
    <>
      {/* <Container class1="home-wrapper-2 service py-4">
        <div className="row ps-4 ps-sm-0">
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 d-flex flex-md-column align-items-center gap-4 gap-sm-3 my-3"
              >
                <div>
                  <img
                    src={service.image}
                    alt="services"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6 className="text-md-center">{service.title}</h6>
                  <p className="mb-0 text-md-center">{service.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container> */}
      <Hero />
      <FlashSale />
      <Categories />
      <FeaturedCollections />
      <Famous />
      {/* <Container class1="home-wrapper-2 special-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center text-sm-start">
              Special Products
            </h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
        </div>
      </Container> */}
      <Container class1="marque-wrapper">
        <div className="row">
          <div className="col-12 p-0">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-5 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 blog-wrapper py-5 px-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
