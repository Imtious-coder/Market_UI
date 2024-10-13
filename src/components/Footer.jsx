import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="footer-top-data d-flex gap-4 align-items-center justify-content-center justify-content-md-start">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your e-mail address..."
                  aria-label="Your e-mail address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 px-3">
        <div className="container-xxl text-white">
          <div className="row">
            <div className="col-6 col-md-3">
              <h4 className="mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="fs-6">
                  S***pur, E****eer Bari, 3**0 <br /> Chattogram, Bangladesh
                </address>
                <a href="tel:+8801935501610" className="d-block mb-2">
                  {" "}
                  +880163****610
                </a>
                <a
                  href="mailto:iarafat386@gmail.com"
                  className="mt-2 d-block mb-2"
                >
                  {" "}
                  im***s@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-3 gap-sm-4 mt-4">
                  <Link
                    to="https://www.facebook.com/imtious.midul/"
                    target={"_blank"}
                  >
                    <BsFacebook className="fs-4" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/imtious/"
                    target={"_blank"}
                  >
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="https://github.com/Imtious-coder" target={"_blank"}>
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link
                    to="https://medium.com/@imtious.islam.me"
                    target={"_blank"}
                  >
                    <BsMedium className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 ">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="py-2 mb-1" to="/terms-and-condition">
                  Terms & Conditions
                </Link>
                <Link className="py-2 mb-1" to="/blog">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-5 mt-md-0">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/signup">
                  Create Account
                </Link>
                <Link className="py-2 mb-1" to="/about">
                  About Us
                </Link>
                <Link className="py-2 mb-1" to="/faq">
                  FAQ
                </Link>
                <Link className="py-2 mb-1" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-5 mt-md-0">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/store">
                  Laptops
                </Link>
                <Link className="py-2 mb-1" to="/store">
                  Headphones
                </Link>
                <Link className="py-2 mb-1" to="/store">
                  Tablets
                </Link>
                <Link className="py-2 mb-1" to="/store">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 py-xxl-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Market
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
