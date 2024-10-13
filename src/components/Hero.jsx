import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Image1 from "../Assets/Images/main-banner-2.jpg";
import "../styles/hero.css";
import Container from "./Container";

const Hero = () => {
  return (
    <Container class1="hero py-2 py-sm-3 px-3">
      <div className="row">
        <div className="col-12 col-md-6 px-1 overflow-hidden">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={true}
            className="overflow-hidden"
          >
            <div className="main-banner position-relative overflow-hidden">
              <img
                src="images/main-banner-1.jpg"
                alt="main-banner"
                className="img-fluid w-100 rounded-3"
              />
              <div className="main-banner-content d-flex justify-content-start position-absolute ps-md-5">
                <div className="d-flex flex-column justify-content-center ps-3 ps-sm-5 ps-md-0">
                  <h4 className="mb-0 mb-sm-3 text-start">
                    SUPERCHARGED FOR PROS
                  </h4>
                  <h5 className="mb-0 mb-sm-3 text-start">HM 13+ Pro.</h5>
                  <p className="mb-0 mb-sm-3 text-start">1999 BDT Only</p>
                  <div className="d-flex justify-start mt-2">
                    <Link to="/" className="button py-2 py-sm-3 px-4 px-sm-5">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-banner position-relative overflow-hidden">
              <img
                src="images/main-banner.jpg"
                alt="main-banner"
                className="img-fluid w-100 rounded-3"
              />
              <div className="main-banner-content d-flex justify-content-start position-absolute ps-md-5">
                <div className="d-flex flex-column justify-content-center ps-3 ps-sm-5 ps-md-0">
                  <h4 className="mb-0 mb-sm-3 text-start">
                    Fill the inside with music
                  </h4>
                  <h5 className="mb-0 mb-sm-3 text-start">Airpods Max Pro </h5>
                  <p className="mb-0 mb-sm-3 text-start">19,999 BDT Only</p>
                  <div className="d-flex justify-start mt-2">
                    <Link to="/" className="button">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-banner position-relative overflow-hidden">
              <img
                src={Image1}
                alt="main-banner"
                className="img-fluid w-100 h-100 rounded-3"
              />
              <div className="main-banner-content d-flex justify-content-start position-absolute ps-md-5">
                <div className="d-flex flex-column justify-content-center ps-3 ps-sm-5 ps-md-0">
                  <h4 className="mb-0 mb-sm-3 text-start text-white fw-bold">
                    DOnt't stop ever
                  </h4>
                  <h5 className="mb-0 mb-sm-3 text-start text-white">
                    MackBook Pro M1
                  </h5>
                  <p className="mb-0 mb-sm-3 text-start text-white">
                    249,999 BDT Only
                  </p>
                  <div className="d-flex justify-start mt-2">
                    <Link to="/" className="button">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="col-12 col-md-6 mt-sm-2 mt-md-0">
          <div className="row">
            <div className="col-6 col-sm-6 mt-1 mt-md-0 px-1 px-md-2">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  alt="main-banner"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="small-banner-content d-flex justify-content-start position-absolute ps-3 ps-lg-5">
                  <div className="d-flex flex-column justify-content-center">
                    <h4 className="mb-0 mb-md-1 mb-lg-2">BEST SALE</h4>
                    <h5 className="mb-0 mb-md-1 mb-lg-2">MackBook pro</h5>
                    <p className="mb-0">355,000 BDT Only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 my-1 my-md-0 px-1 px-md-2">
              <div className="small-banner w-100 position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  alt="main-banner"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="small-banner-content d-flex justify-content-start position-absolute ps-3 ps-lg-5">
                  <div className="d-flex flex-column justify-content-center">
                    <h4 className="mb-0 mb-md-1 mb-lg-2">NEW ARRIVAL</h4>
                    <h5 className="mb-0 mb-md-1 mb-lg-2">Buy IPad Air</h5>
                    <p className="mb-0">185,000 BDT Only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 my-1 mt-md-3 px-1 px-md-2">
              <div className="small-banner w-100 position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  alt="main-banner"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="small-banner-content d-flex justify-content-start position-absolute ps-3 ps-lg-5">
                  <div className="d-flex flex-column justify-content-center">
                    <h4 className="mb-0 mb-md-1 mb-lg-2">15% OFF</h4>
                    <h5 className="mb-0 mb-md-1 mb-lg-2">Smartwatch 7</h5>
                    <p className="mb-0">
                      Shop the latest brand <br /> styles and colors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 my-1 my-md-3 px-1 px-md-2">
              <div className="small-banner w-100 position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  alt="main-banner"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="small-banner-content d-flex justify-content-start position-absolute ps-3 ps-lg-5">
                  <div className="d-flex flex-column justify-content-center">
                    <h4 className="mb-0 mb-md-1 mb-lg-2">FREE ENGRAVING</h4>
                    <h5 className="mb-0 mb-md-1 mb-lg-2">AirPods Max</h5>
                    <p className="mb-0">
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
  );
};

export default Hero;
