import React, { useContext, useState } from "react";
import { AiFillHeart, AiFillSetting } from "react-icons/ai";
import {
  FaAlignJustify,
  FaBook,
  FaHome,
  FaList,
  FaPhoneSquareAlt,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaStore,
  FaToggleOff,
  FaUser,
  FaUserAstronaut,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../strore/useStore";
import "../styles/header.css";

const Header = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const isLoggedIn = localStorage.getItem("auth-token");
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [profileMenuMobileOpen, setProfileMenuMobileOpen] = useState(false);

  return (
    <>
      <header className="header-top-strip py-2 d-none d-md-block px-2">
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
                  +880163*****10
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper pt-2 pb-sm-2 px-2">
        <div className="container-xxl py-2 py-md-3">
          <div className="row align-items-center">
            <div className="col-10 col-md-2 col-lg-2">
              <h1 className="text-start mb-2 mb-sm-0">
                <Link to="/" className="text-dark">
                  Market.
                </Link>
              </h1>
            </div>
            <div className="d-none d-md-block col-md-6 col-lg-5">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text py-2 px-4 border"
                  id="basic-addon2"
                >
                  <FaSearch className="fs-5 color1" />
                </span>
              </div>
            </div>
            <div className="d-none d-md-block col-md-4 col-lg-5 mt-2 mt-sm-3 mt-lg-0 ps-2">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-4">
                {/* Favourites */}
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center position-relative hvr-color1 me-4 me-lg-2 me-2 me-xl-4"
                    title="List of your favourite products"
                  >
                    <div className="d-flex align-items-center opacity">
                      <AiFillHeart className="fs-4 me-sm-1" />
                      <span className="mb-0 d-none d-lg-block mt-2 mb-2">
                        Favourites
                      </span>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2 pt-1">
                      3
                    </span>
                  </Link>
                </div>
                {/* Cart */}
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center position-relative me-4 me-lg-2 me-xl-4 hvr-color1"
                    title="Cart"
                  >
                    <div className="d-flex align-items-center opacity">
                      <FaShoppingCart className="fs-4 me-sm-1" />
                      <span className="mb-0 d-none d-lg-block mt-2 mb-2">
                        My Cart
                      </span>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2 pt-1">
                      {getTotalCartItems()}
                    </span>
                  </Link>
                </div>
                {/* My Account */}
                <div
                  className={`${
                    isLoggedIn ? "text-primary" : "hvr-color1"
                  } d-flex align-items-center flex-column my-account`}
                >
                  <div
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="d-flex align-items-center dropdown-toggle"
                  >
                    <FaUserAstronaut className="fs-4 me-sm-1" />
                    <span className="mb-0 d-none d-lg-block mt-2 mb-2 me-1">
                      My Account
                    </span>
                  </div>
                  {profileMenuOpen ? (
                    <div className="bg-dark rounded mt-5 px-2 options position-absolute d-flex flex-column">
                      <Link to="/profile" className="px-4 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaUser /> Profile
                        </p>
                      </Link>
                      {isLoggedIn ? (
                        <Link
                          to="/"
                          onClick={handleLogout}
                          className="px-4 pt-3 border-bottom"
                        >
                          <p className="mb-2 white d-flex align-items-center gap-1">
                            <FaSignOutAlt /> Logout
                          </p>
                        </Link>
                      ) : (
                        <Link to="/login" className="px-4 pt-3 border-bottom">
                          <p className="mb-2 white d-flex align-items-center gap-1">
                            <FaSignInAlt /> Login
                          </p>
                        </Link>
                      )}

                      <Link to="/settings" className="px-4 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <AiFillSetting /> Settings
                        </p>
                      </Link>
                      <Link to="/wishlist" className="px-3 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaList /> Wishlist
                        </p>
                      </Link>
                      <div to="/profile" className="px-3 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaToggleOff /> Dark Mode
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex d-md-none col-2 col-md-0 justify-content-end">
              <FaAlignJustify
                className="fs-5 black"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      <header className="header-mobile d-md-none">
        <div className="row m-0 w-100">
          {menuOpen ? (
            <div className="col-12 mobile-menu-visible p-2">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text py-2 px-4 border"
                  id="basic-addon2"
                >
                  <FaSearch className="fs-5 color1" />
                </span>
              </div>
              <div className="header-upper-links d-flex align-items-center justify-content-center gap-5 pt-4 pb-2">
                {/* Favourites */}
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center position-relative white"
                    title="List of your favourite products"
                  >
                    <div className="d-flex align-items-center">
                      <AiFillHeart className="fs-4 me-sm-1" />
                      <span className="mb-0 d-none d-sm-block mt-2 mb-2">
                        Favourites
                      </span>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2 pt-1">
                      3
                    </span>
                  </Link>
                </div>
                {/* Cart */}
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center position-relative white"
                    title="Cart"
                  >
                    <div className="d-flex align-items-center">
                      <FaShoppingCart className="fs-4 me-sm-1" />
                      <span className="mb-0 d-none d-sm-block mt-2 mb-2">
                        My Cart
                      </span>
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2 pt-1">
                      {getTotalCartItems()}
                    </span>
                  </Link>
                </div>
                {/* My Account */}
                <div
                  className={`${
                    isLoggedIn ? "text-primary" : "white"
                  } d-flex align-items-center flex-column my-account`}
                >
                  <div
                    onClick={() =>
                      setProfileMenuMobileOpen(!profileMenuMobileOpen)
                    }
                    className="d-flex align-items-center dropdown-toggle"
                  >
                    <FaUserAstronaut className="fs-4 me-sm-1" />
                    <span className="mb-0 d-none d-sm-block mt-2 mb-2">
                      My Account
                    </span>
                  </div>
                  {profileMenuMobileOpen ? (
                    <div className="bg-dark rounded mt-5 px-2 options position-absolute d-flex flex-column">
                      <Link to="/profile" className="px-4 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaUser /> Profile
                        </p>
                      </Link>
                      {isLoggedIn ? (
                        <Link
                          to="/"
                          onClick={handleLogout}
                          className="px-4 pt-3 border-bottom"
                        >
                          <p className="mb-2 white d-flex align-items-center gap-1">
                            <FaSignOutAlt /> Logout
                          </p>
                        </Link>
                      ) : (
                        <Link to="/login" className="px-4 pt-3 border-bottom">
                          <p className="mb-2 white d-flex align-items-center gap-1">
                            <FaSignInAlt /> Login
                          </p>
                        </Link>
                      )}

                      <Link to="/settings" className="px-4 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <AiFillSetting /> Settings
                        </p>
                      </Link>
                      <Link to="/wishlist" className="px-3 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaList /> Wishlist
                        </p>
                      </Link>
                      <div to="/profile" className="px-3 pt-3 border-bottom">
                        <p className="mb-2 white d-flex align-items-center gap-1">
                          <FaToggleOff /> Dark Mode
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>

      <header className="header-bottom px-2">
        <div className="container-xxl">
          <div className="d-flex align-items-center justify-content-between justify-content-md-start gap-5 py-2">
            <NavLink
              to="/"
              className="hvr-color1 fw-bold opacity navigations d-flex gap-1 align-items-center"
            >
              <FaHome />
              <span className="d-none d-sm-block">Home</span>
            </NavLink>
            <NavLink
              to="/store"
              className="hvr-color1 fw-bold opacity navigations d-flex gap-1 align-items-center"
            >
              <FaStore />
              <span className="d-none d-sm-block">Store</span>
            </NavLink>
            <NavLink
              to="/blog"
              className="hvr-color1 fw-bold opacity navigations d-flex gap-1 align-items-center"
            >
              <FaBook />
              <span className="d-none d-sm-block">Blogs</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="hvr-color1 fw-bold opacity navigations d-flex gap-1 align-items-center"
            >
              <FaPhoneSquareAlt />
              <span className="d-none d-sm-block">Contact</span>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
