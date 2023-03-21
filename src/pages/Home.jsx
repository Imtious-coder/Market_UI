import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-3 pb-lg-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                alt="main-banner"
                className="img-fluid w-100 rounded-3"
              />
              <div className="main-banner-content d-flex justify-content-center justify-content-md-start position-absolute ps-md-5">
                <div className="d-flex flex-column justify-content-center">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>HM 13 Pro.</h5>
                  <p>1999 BDT Only</p>
                  <div>
                    <Link to="/" className="button">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-sm-2 mt-md-4 mt-lg-0">
            <div className="row">
              <div className="col-12 col-sm-6 mt-2 mt-lg-0">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="main-banner"
                    className="img-fluid w-100 rounded-3"
                  />
                  <div className="small-banner-content d-flex justify-content-center justify-content-md-start position-absolute ps-md-5">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="mb-2">BEST SALE</h4>
                      <h5>MackBook pro</h5>
                      <p>355,000 BDT Only</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 my-2 mt-lg-0">
                <div className="small-banner w-100 position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="main-banner"
                    className="img-fluid w-100 rounded-3"
                  />
                  <div className="small-banner-content d-flex justify-content-center justify-content-md-start position-absolute ps-md-5">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="mb-2">NEW ARRIVAL</h4>
                      <h5>Buy IPad Air</h5>
                      <p>185,000 BDT Only</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-sm-2 mt-md-3">
                <div className="small-banner w-100 position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="main-banner"
                    className="img-fluid w-100 rounded-3"
                  />
                  <div className="small-banner-content d-flex justify-content-center justify-content-md-start position-absolute ps-md-5">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="mb-2">15% OFF</h4>
                      <h5>Smartwatch 7</h5>
                      <p>
                        Shop the latest brand <br /> styles and colors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 my-2 my-md-3">
                <div className="small-banner w-100 position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="main-banner"
                    className="img-fluid w-100 rounded-3"
                  />
                  <div className="small-banner-content d-flex justify-content-center justify-content-md-start position-absolute ps-md-5">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="mb-2">FREE ENGRAVING</h4>
                      <h5>AirPods Max</h5>
                      <p>
                        Hight-fidelity playback & <br /> ultra low distortion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
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
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-center flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="" src="images/famouse-1.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="" src="images/famouse-2.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative text-dark">
              <img className="" src="images/famous-3.webp" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">Smartphones</h5>
                <h6>iPhone 13 Pro.</h6>
                <p>
                  Now in Black. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative text-dark">
              <img className="" src="images/famouse-4.jpeg" alt="famous" />
              <div className="famous-card-content position-absolute px-4">
                <h5 className="text-uppercase">home speakers</h5>
                <h6>Room-filling sound</h6>
                <p>From $699.00 or $116.29/mo. for 14 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
