import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign up"} />
      <BreadCrumb title="Sign up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15 mt-4">
                <div>
                  <input
                    type="text"
                    name="First name"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Last name"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-3 gap-15">
                    <button className="button border-0">Create</button>
                    <Link to="/login">
                      <p className="mb-0 text-primary">
                        Already have an account?
                      </p>
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

export default Signup;
