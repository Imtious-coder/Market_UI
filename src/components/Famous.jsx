import React from "react";
import "../styles/famous.css";
import Container from "./Container";

const Famous = () => {
  return (
    <Container class1="home-wrapper-2 famous-wrapper py-md-5 px-2">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="border-left bg-red"></div>
        <p className="red mb-0">Our Top-4</p>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Famous Product's
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
  );
};

export default Famous;
