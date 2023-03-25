import React from "react";
import { FaCartPlus, FaRegEye, FaRegHeart } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { productData } from "../utils/Data";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  return (
    <div className="row m-0 p-0 justify-content-center">
      {productData?.map(
        ({ image, title, description, brand, price }, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/store"
                  ? `gr-${grid}`
                  : "col-12 col-sm-6 col-md-4 col-lg-3 px-4 px-sm-3 mb-3"
              } `}
            >
              <Link
                to={`${
                  location.pathname === "/"
                    ? "/product/:id"
                    : location.pathname === "/product/:id"
                    ? "/product/1"
                    : location.pathname === "/store"
                    ? "/product/:id"
                    : ":id"
                }`}
                className="product-card-link"
              >
                <div className="product-card position-relative">
                  <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                      <FaRegHeart className="hvr-color1 fs-6" />
                    </button>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={image}
                      className="img-fluid w-100"
                      alt="product_image"
                    />
                  </div>
                  <div className="product-details">
                    <h6 className="brand text-center mb-2">{brand}</h6>
                    <h5 className="product-title text-center mb-2">{title}</h5>
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                      className="ratings"
                    >
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="description text-center">{description}</p>
                    <p className="price text-center"> {price} BDT </p>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                      <button className="border-0 bg-transparent">
                        <FaRegEye className="hvr-color1 fs-6" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <TiArrowRepeat className="hvr-color1 fs-5" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <FaCartPlus className="hvr-color1 fs-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProductCard;
