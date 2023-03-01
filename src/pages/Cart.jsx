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
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-30">
                <div className="w-25">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid"
                    alt="product-img"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">Smart Watch 3 Pro</h5>
                  <p className="color">Color: Red</p>
                  <p className="size">Size: M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 199.99</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    placeholder="0"
                    min={1}
                    max={20}
                    className="form-control"
                    style={{ width: "70px", height: "30px" }}
                  />
                </div>
                <div className="px-2 py-1 bg-white rounded-circle">
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 199.99</h5>
              </div>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-30">
                <div className="w-25">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid"
                    alt="product-img"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">Smart Watch 3 Pro</h5>
                  <p className="color">Color: Red</p>
                  <p className="size">Size: M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 199.99</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    placeholder="0"
                    min={1}
                    max={20}
                    className="form-control"
                    style={{ width: "70px", height: "30px" }}
                  />
                </div>
                <div className="px-2 py-1 bg-white rounded-circle">
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 199.99</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link to="/" className="button">
                  Continue Shopping
                </Link>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h4 className="subtotal">SubTotal: $ 301.20</h4>
                <p className="tax">
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
