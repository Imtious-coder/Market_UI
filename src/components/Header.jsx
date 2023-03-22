import React from "react";
import { AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 d-none d-sm-block">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+8801635501610">
                  +8801635501610
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-sm-3 col-lg-2">
              <h1 className="text-center text-sm-start mb-3 mb-sm-0">
                <Link to="/" className="text-white">
                  Market.
                </Link>
              </h1>
            </div>
            <div className="col-12 col-sm-9 col-lg-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text py-2 px-3 border-0"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6 text-white" />
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-5 mt-3 mt-lg-0">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center"
                    title="Compare Products"
                  >
                    <p className="mb-0 text-white hvr-color1">
                      <TiArrowRepeat className="fs-2 me-sm-1" />
                      Compare
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10"
                    title="List of your favourite products"
                  >
                    <p className="mb-0 text-white hvr-color1">
                      <AiFillHeart className="fs-4 me-sm-2" />
                      Favourite
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10"
                    title="Login / Sign up"
                  >
                    <p className="mb-0 text-white hvr-color1">
                      <AiOutlineUser className="fs-4 me-sm-2" />
                      Log in
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center"
                    title="Cart"
                  >
                    <FaShoppingCart className="fs-3 me-sm-2 hvr-color1" />
                    <p>10</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-sm-5">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="dropdown d-flex justify-content-center justify-content-sm-start">
                      <button
                        className="d-flex align-items-center btn btn-secondary dropdown-toggle bg-transparent border-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="me-2 me-md-5 d-inline-block">
                          Shop Categories
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item text-white"
                            to="/store"
                          >
                            Phone
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-white"
                            to="/store"
                          >
                            Laptop
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-white"
                            to="/store"
                          >
                            Car
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-white"
                            to="/store"
                          >
                            Bick
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 mb-3 mb-sm-0 d-flex align-itmes-center justify-content-center justify-content-sm-start">
                    <div className="d-flex align-items-center gap-4 gap-md-5">
                      <NavLink to="/" className="hvr-color1">
                        Home
                      </NavLink>
                      <NavLink to="/store" className="hvr-color1">
                        Store
                      </NavLink>
                      <NavLink to="/blog" className="hvr-color1">
                        Blogs
                      </NavLink>
                      <NavLink to="/contact" className="hvr-color1">
                        Contact
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
