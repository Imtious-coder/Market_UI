import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../Assets/Images/signup.png";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import "../styles/signUp.css";
import GoogleSVG from "../utils/GoogleSVG";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9 ]{3,}$/;
    if (!usernameRegex.test(formData.username)) {
      newErrors.username =
        "Username must be at least 3 characters long and contain only letters, numbers, or spaces.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SIGNUP API
  const signup = async () => {
    if (!validateForm()) {
      return;
    }

    console.log("Sign up", formData);
    let responseData;
    await fetch("https://market-backend-1-mmzk.onrender.com/api/user/signup", {
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
      {/* <Container class1="login-wrapper home-wrapper-2 py-0 py-sm-5">
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
      </Container> */}
      <section className="sign-up row m-0 w-100 mb-5 px-3 px-sm-5 px-lg-0">
        <div className="img d-none d-lg-block col-lg-6 m-0 p-0">
          <img className="img-fluid" src={image} alt="Signup Visual" />
        </div>
        <div className="col-1 d-none d-lg-block"></div>
        <div className="col-12 col-lg-5 mt-4 px-sm-5 px-lg-0 py-lg-5 pe-lg-5 ">
          <h2 className="px-sm-5 px-lg-0 text-center text-sm-start">
            Create an account
          </h2>
          <p className="px-sm-5 px-lg-0 text-center text-sm-start">
            Enter your details below
          </p>
          <div className="my-4 px-sm-5 px-lg-0 pe-lg-5">
            {errors.username && (
              <small className="text-danger">{errors.username}</small>
            )}
            <CustomInput
              type="text"
              name="username"
              value={formData.username}
              handleFormData={handleFormData}
              placeholder="Full Name"
              className={"mb-t"}
            />

            <CustomInput
              type="email"
              name="email"
              value={formData.email}
              handleFormData={handleFormData}
              placeholder="Email"
              className={"mt-4"}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

            <CustomInput
              type="password"
              name="password"
              value={formData.password}
              handleFormData={handleFormData}
              placeholder="Password"
              className={"mt-4"}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            <button
              onClick={() => signup()}
              className="bg-red white signup-button my-4"
            >
              Create Account
            </button>

            <button className="signup-google-button d-flex align-items-center justify-content-center gap-2 mb-4">
              <span>
                <GoogleSVG />
              </span>
              Sign up with Google
            </button>

            <p className="d-flex align-items-center justify-content-center gap-3">
              <span>Already have an account?</span>
              <Link className="red text-decoration-underline" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
