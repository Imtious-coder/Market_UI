import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // FORM DATA FUNCTIONALITY
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SIGNUP API
  const signup = async () => {
    console.log("Sign up", formData);
    let responseData;
    await fetch("https://market-backend-r9ew.onrender.com/signup", {
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
      <Meta title={"Sign up"} />
      <BreadCrumb title="Sign up" />
      <Container class1="login-wrapper home-wrapper-2 py-0 py-sm-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 col-md-6 col-lg-4">
            <div className="auth-card">
              <h3 className="text-center">Create Account</h3>
              <div className="d-flex flex-column gap-15 mt-4">
                <CustomInput
                  type="text"
                  name="username"
                  value={formData.username}
                  handleFormData={handleFormData}
                  placeholder="Full Name"
                />
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
                  <div className="d-flex flex-column justify-content-center align-items-center mt-3 gap-15">
                    <button
                      onClick={() => signup()}
                      className="button border-0"
                    >
                      Create
                    </button>
                    <Link to="/login">
                      <p className="mb-0 text-primary">
                        Already have an account?
                      </p>
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

export default Signup;
