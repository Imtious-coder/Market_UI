import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { ShopContext } from "../strore/useStore";
import CrossSVG from "../utils/CrossSVG";

const Cart = () => {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  console.log(cartItems, allProducts);
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-3 py-sm-5">
        <div className="row w-100 m-0">
          <div className="col-12 bg-white pt-3">
            <div className="row w-100 m-0">
              <div className="col-12 row m-0 border-2 border-bottom pb-2">
                <h4 className="col-3 col-sm-2">Product</h4>
                <h4 className="col-3 col-sm-2 text-center">Title</h4>
                <h4 className="col-2 text-center d-none d-sm-block">Price</h4>
                <h4 className="col-2 text-center d-none d-sm-block">
                  Quantity
                </h4>
                <h4 className="col-3 col-sm-2 text-center">Total</h4>
                <h4 className="col-3 col-sm-2 text-center">Remove</h4>
              </div>
              {allProducts.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <div className="col-12 mb-2 row w-100 m-0 cart-item border-2 border-bottom py-2 align-items-center">
                      <div className="col-3 col-sm-2">
                        <img src={e.image[0]} alt="" />
                      </div>
                      <p className="col-3 col-sm-2 text-center mb-0">
                        {e.name}
                      </p>
                      <p className="col-2 text-center mb-0 d-none d-sm-block">
                        {e.new_price} BDT
                      </p>
                      <p className="col-2 text-center mb-0 d-none d-sm-block">
                        {cartItems[e.id]}
                      </p>
                      <p className="col-3 col-sm-2 text-center cursor mb-0">
                        {e.new_price * cartItems[e.id]} BDT
                      </p>
                      <p
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        className="col-3 col-sm-2 text-center mb-0"
                      >
                        <CrossSVG />
                      </p>
                    </div>
                  );
                }
                return null;
              })}
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
                <h4 className="subtotal text-center">
                  SubTotal: {getTotalCartAmount()} BDT
                </h4>
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
