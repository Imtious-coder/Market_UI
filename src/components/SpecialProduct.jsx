import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { productData } from "../utils/Data";

const SpecialProduct = () => {
  return (
    <div className="row m-0">
      {productData?.map(({ title, brand, price, quantity, image }, index) => {
        return (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 px-4 px-sm-3"
          >
            <div className="special-product-card">
              <div className="row">
                <div className="col-12">
                  <img
                    className="img-fluid w-100"
                    src={image}
                    alt="product_image"
                  />
                </div>
                <div className="col-12 special-product-content">
                  <h5 className="brand text-center text-sm-start">{brand}</h5>
                  <h6 className="title text-center text-sm-start mb-0">
                    {title}
                  </h6>
                  <div className="d-flex justify-content-center justify-content-sm-start">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="price text-center text-sm-start">
                    <span className="red-p">{price} </span> &nbsp;
                    <strike>1289</strike> BDT
                  </p>
                  <div className="discount-till d-flex align-items-center justify-content-center justify-content-sm-start gap-1">
                    <p className="mb-0 text-secondary">
                      <strong>5</strong> days
                    </p>
                    <div className="d-flex align-items-center gap-1">
                      <span className="badge rounded-circle py-2 bg-info text">
                        01
                      </span>
                      :
                      <span className="badge rounded-circle py-2 bg-info text">
                        41
                      </span>
                      :
                      <span className="badge rounded-circle p-2 py-2 bg-info text">
                        21
                      </span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                    <p className="text-center text-sm-start text-secondary">
                      Products: {quantity}
                    </p>
                    <div className="progress rounded-pill">
                      <div
                        className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center justify-content-sm-start pb-3">
                    {quantity === 0 ? (
                      <Link
                        to="/"
                        className="button-disable disabled"
                        title="This product is no longer available"
                      >
                        Stock Out
                      </Link>
                    ) : (
                      <Link to="/" className="button">
                        Add to cart
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialProduct;
