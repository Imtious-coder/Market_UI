import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";

const CompareProduct = () => {
  const productData = [
    {
      id: 1,
      image: "images/watch.jpg",
      title: "SKM 3 Pro",
      price: "399",
      brand: "Havels",
      type: "Watch",
      availablity: "In Stock",
      size: "S M ",
    },
    {
      id: 2,
      image: "images/watch.jpg",
      title: "SKM 3 Pro",
      price: "399",
      brand: "Havels",
      type: "Watch",
      availablity: "In Stock",
      size: "S M ",
    },
    {
      id: 3,
      image: "images/watch.jpg",
      title: "SKM 3 Pro",
      price: "399",
      brand: "Havels",
      type: "Watch",
      availablity: "In Stock",
      size: "S M ",
    },
    {
      id: 4,
      image: "images/watch.jpg",
      title: "SKM 3 Pro",
      price: "399",
      brand: "Havels",
      type: "Watch",
      availablity: "In Stock",
      size: "S M ",
    },
    {
      id: 5,
      image: "images/watch.jpg",
      title: "SKM 3 Pro",
      price: "399",
      brand: "Havels",
      type: "Watch",
      availablity: "In Stock",
      size: "S M ",
    },
  ];
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-4 py-sm-5">
        <div className="row">
          {productData?.map(
            (
              { image, title, price, brand, type, availablity, size },
              index
            ) => {
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
                      <img
                        className="img-fluid w-100"
                        src={image}
                        alt="watch"
                      />
                    </div>
                    <div className="compare-product-details">
                      <h5 className="title text-center">{title}</h5>
                      <h6 className="price text-center my-3">{price} BDT</h6>
                    </div>
                    <div>
                      <div className="product-detail d-flex py-2 border-top justify-content-between align-items-center">
                        <h5 className="mb-0">Brand:</h5>
                        <p className="mb-0">{brand}</p>
                      </div>
                      <div className="product-detail d-flex py-2 border-top justify-content-between align-items-center">
                        <h5 className="mb-0">Type:</h5>
                        <p className="mb-0">{type}</p>
                      </div>
                      <div className="product-detail d-flex py-2 border-top justify-content-between align-items-center">
                        <h5 className="mb-0">Availablity:</h5>
                        <p className="mb-0">{availablity}</p>
                      </div>
                      <div className="product-detail d-flex py-2 border-top justify-content-between align-items-center">
                        <h5 className="mb-0">Color:</h5>
                        <Color />
                      </div>
                      <div className="product-detail d-flex py-2 border-top justify-content-between align-items-center">
                        <h5 className="mb-0">Size:</h5>
                        <p className="mb-0">{size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
