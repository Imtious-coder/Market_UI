import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-0 py-sm-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 col-md-6 col-lg-4">
            <div className="auth-card">
              <h3 className="text-center mb-4">Reset Password</h3>
              <form action="/" className="d-flex flex-column gap-15 mt-3">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                />
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-2 gap-15">
                    <Link to="/reset-password">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                    </Link>
                    <Link to="/forgot-password">
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

export default Resetpassword;
