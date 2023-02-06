import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"/>
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your e-mail address..." aria-label="Your e-mail address..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl text-white">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="fs-6">Shimpur, Engineer Bari, 3500 <br/> Chattogram, Bangladesh</address>
                <a href="tel:+8801935501610" className="d-block mb-2"> +8801635501610</a>
                <a href="mailto:iarafat386@gmail.com" className="mt-2 d-block mb-2"> iarafat386@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <Link to="">
                    <BsLinkedin className="fs-4"/>
                  </Link>
                  <Link to="">
                    <BsInstagram className="fs-4"/>
                  </Link>
                  <Link to="">
                    <BsGithub className="fs-4"/>
                  </Link>
                  <Link to="">
                    <BsYoutube className="fs-4"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/">Privacy Policy</Link>
                <Link className="py-2 mb-1" to="/">Refund Policy</Link>
                <Link className="py-2 mb-1" to="/">Shipping Policy</Link>
                <Link className="py-2 mb-1" to="/">Terms & Conditions</Link>
                <Link className="py-2 mb-1" to="/">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/">About Us</Link>
                <Link className="py-2 mb-1" to="/">FAQ</Link>
                <Link className="py-2 mb-1" to="/">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1" to="/">Laptops</Link>
                <Link className="py-2 mb-1" to="/">Headphones</Link>
                <Link className="py-2 mb-1" to="/">Tablets</Link>
                <Link className="py-2 mb-1" to="/">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()} Powered by Market</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer