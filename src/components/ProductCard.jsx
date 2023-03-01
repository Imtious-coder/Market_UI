import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}
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
              <img src="/images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="/images/watch.jpg"
              className="img-fluid"
              alt="product_image"
            />
            <img
              src="/images/watch-1.jpeg"
              className="img-fluid"
              alt="product_image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Smart watch bulk 10 pack multi colored for kids.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="description pe-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="price"> $100.00 </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="add_cart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add_cart" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
