import React from "react";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { services } from "../utils/Data";
import FlashSale from "../components/FlashSale";

const Home = () => {
  const isLoggedIn = localStorage.getItem("auth-token");
  console.log(isLoggedIn, "FOUND ONE");
  return (
    <>
      <Hero />
      <FlashSale />
      <Container class1="home-wrapper-2 service py-4">
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
      </Container>
      <Container class1="home-wrapper-2 categories py-5">
        <div className="row px-3">
          <div className="col-12">
            <h3 className="section-heading text-center text-sm-start">
              Shop By Categories
            </h3>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>Speaker</h6>
              <p>400 Items</p>
            </div>
            <div>
              <img
                src="images/speaker.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3">
            <div>
              <h6>Cameras</h6>
              <p>10 Items</p>
            </div>
            <div>
              <img
                src="images/camera.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>Headphone</h6>
              <p>101 Items</p>
            </div>
            <div>
              <img
                src="images/headphone.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>Laptop</h6>
              <p>200 Items</p>
            </div>
            <div>
              <img
                src="images/laptop.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>TWS</h6>
              <p>502 Items</p>
            </div>
            <div>
              <img
                src="images/acc.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>TV</h6>
              <p>404 Items</p>
            </div>
            <div>
              <img
                src="images/tv.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>Watch</h6>
              <p>202 Items</p>
            </div>
            <div>
              <img
                src="images/watch-4.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center gap-4 shadow-sm py-3 mt-4 mt-sm-0">
            <div>
              <h6>Others</h6>
              <p>402 Items</p>
            </div>
            <div>
              <img
                src="images/homeapp.jpg"
                alt="camera"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 featured-wrapper py-4 py-sm-5 px-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center text-sm-start">
              Featured Collections
            </h3>
          </div>
          <ProductCard />
        </div>
      </Container>
      <Container class1="home-wrapper-2 famous-wrapper py-md-5 px-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center text-sm-start">
              Famous Products
            </h3>
          </div>
          <div className="col-12 col-sm-6 px-4 px-sm-3 px-md-2 px-lg-3 col-md-3 mb-3">
            <div className="famous-card position-relative">
              <img className="" src="images/famouse-1.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>2999 BDT Only</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 px-4 px-sm-3 px-md-2 px-lg-3 col-md-3 mb-3">
            <div className="famous-card position-relative">
              <img className="" src="images/famouse-2.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 px-4 px-sm-3 px-md-2 px-lg-3 col-md-3 mb-3">
            <div className="famous-card position-relative text-dark">
              <img className="" src="images/famous-3.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Smartphones</h5>
                <h6>iPhone 13 Pro.</h6>
                <p>159,000 BDT Only</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 px-4 px-sm-3 px-md-2 px-lg-3 col-md-3">
            <div className="famous-card position-relative text-dark">
              <img className="" src="images/famouse-4.jpeg" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">home speakers</h5>
                <h6>Room-filling sound</h6>
                <p>499 BDT Only</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 special-wrapper py-5">
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
      </Container>
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
