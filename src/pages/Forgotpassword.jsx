import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-4">Reset Your Password</h3>
              <h6 className="text-center mt-3 mb-0">
                We will send you an email to reset your password
              </h6>
              <form action="" className="d-flex flex-column gap-15 mt-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-2 gap-15">
                    <Link to="/reset-password">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                    </Link>
                    <Link to="/login">
                      <p className="mb-0">Cancel</p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
