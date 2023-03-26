import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-3 py-sm-5">
        <div className="row">
          <div className="col-12 bg-white pt-3">
            <div className="row">
              <div className="col-6 col-sm-3">
                <h4 className="fw-bold text-center">Product</h4>
                <div className="d-flex justify-content-center">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-50"
                    alt="product-img"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="title text-center fs-6">Smart Watch 3 Pro</h5>
                  <p className="color text-center">Color: Red</p>
                  <p className="size text-center">Size: M</p>
                </div>
              </div>
              <div className="col-6 col-sm-9">
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <h4 className="fw-bold text-center">Price</h4>
                    <h5 className="price fs-6 text-center">399 BDT</h5>
                  </div>
                  <div className="col-12 col-sm-4 mt-4 mt-sm-0">
                    <div>
                      <h4 className="text-center fw-bold">Quantity</h4>
                      <input
                        type="number"
                        name=""
                        placeholder="0"
                        min={1}
                        max={20}
                        className="form-control mx-auto"
                        style={{ width: "70px", height: "30px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mt-4 mt-sm-0">
                    <h4 className="text-center fw-bold">Total</h4>
                    <div className="d-flex flex-column justify-content-center flex-sm-row gap-2 gap-sm-4">
                      <h5 className="price fs-6 text-center">399 BDT</h5>
                      <AiFillDelete className="text-danger text-center mx-auto mx-sm-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-4">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
              <div>
                <Link to="/store" className="button text-center">
                  Continue Shopping
                </Link>
              </div>
              <div className="d-flex flex-column align-items-center align-items-sm-end mt-4 mt-sm-0">
                <h4 className="subtotal text-center">SubTotal: 399 BDT</h4>
                <p className="tax text-center">
                  Taxes and shipping calculated at checkout*
                </p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
