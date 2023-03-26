import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-3 py-sm-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d280925.5894647033!2d-76.99939660412407!3d38.92812386739523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1676498664154!5m2!1sen!2sbd"
              width="100%"
              height="550"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="col-12 mt-4">
            <div className="contact-inner-wrapper">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div>
                    <h3 className="contact-title text-center text-sm-start">
                      Contact
                    </h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div>
                        <textarea
                          className="w-100 form-control"
                          placeholder="Comments"
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                        ></textarea>
                      </div>
                      <div>
                        <button type="submit" className="button border-0">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mt-5 mt-sm-0">
                  <div>
                    <h3 className="contact-title mb-3 text-center text-sm-start">
                      Get In Touch With Us
                    </h3>
                    <div>
                      <ul className="ps-0">
                        <li className="d-flex align-items-center mb-3">
                          <AiOutlineHome className="fs-6" /> &nbsp;
                          <address className="fs-6 mb-0">
                            Shimpur, Engineer Bari, 3500. Chattogram,
                            Bangladesh.
                          </address>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <BiPhoneCall /> &nbsp;
                          <a href="tel:+8801935501610" className="fs-6">
                            +8801635501610
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <AiOutlineMail /> &nbsp;
                          <a
                            href="mailto:iarafat386@gmail.com"
                            className="fs-6"
                          >
                            iarafat386@gmail.com
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <BiInfoCircle /> &nbsp;
                          <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
