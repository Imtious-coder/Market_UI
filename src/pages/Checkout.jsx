import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Market.</h3>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">
                Imtious Islam (iarafat386@gmail.com)
              </p>
              <h4 className="mt-4 mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="">USA</option>
                    <option value="">INDIA</option>
                    <option value="">BANGLADESH</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suit, etc."
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="">INDIANA</option>
                    <option value="">BANGLADESH</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="text-dark d-flex align-items-center"
                    >
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/store" className="button2">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center justify-content-between">
                <div className="w-75 d-flex align-items-center gap-4">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-5px", right: "-5px" }}
                      className="badge bg-secondary rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src="/images/watch.jpg" alt="" />
                  </div>
                  <div>
                    <h5 className="product-title">Smart Watch 3 Pro</h5>
                    <p className="product-code">S / #jkvdsch</p>
                  </div>
                </div>
                <div className="">
                  <h5 className="product-price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="subtotal">Subtotal</p>
                <p className="subtotal-price">$ 780</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 shipping">Shipping</p>
                <p className="mb-0 shipping-price">$ 20</p>
              </div>
            </div>
            <div className="d-flex py-4 justify-content-between align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 800</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
