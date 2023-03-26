import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-0 py-sm-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 col-md-6 col-lg-4">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-15 mt-4">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex justify-content-center align-items-center mt-3 gap-15">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup">
                      <button className="button2 border-0">Sign up</button>
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

export default Login;
