import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // FORM DATA FUNCTIONALITY
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // LOGIN API
  const login = async () => {
    console.log("Login", formData);
    let responseData;
    await fetch("https://marketbackend-production.up.railway.app/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-0 py-sm-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 col-md-6 col-lg-4">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <div className="d-flex flex-column gap-15 mt-4">
                <CustomInput
                  type="email"
                  name="email"
                  value={formData.email}
                  handleFormData={handleFormData}
                  placeholder="Email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  value={formData.password}
                  handleFormData={handleFormData}
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex justify-content-center align-items-center mt-3 gap-15">
                    <button
                      onClick={() => {
                        login();
                      }}
                      className="button border-0"
                    >
                      Login
                    </button>
                    <Link to="/signup">
                      <button className="button2 border-0">Sign up</button>
                    </Link>
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

export default Login;
