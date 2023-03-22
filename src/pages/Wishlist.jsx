import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { productData } from "../utils/Data";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          {productData?.map(({ image, title, price }, index) => {
            return (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 px-4 px-sm-3 mb-4"
              >
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    className="position-absolute cross img-fluid"
                    alt="cross"
                  />
                  <div className="product-card-image">
                    <img className="img-fluid w-100" src={image} alt="watch" />
                  </div>
                  <div className="wishlist-product-details">
                    <h5 className="title text-center">{title}</h5>
                    <h6 className="price text-center my-3">{price} BDT</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
