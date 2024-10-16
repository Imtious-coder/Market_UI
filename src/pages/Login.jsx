import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../Assets/Images/signup.png";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import "../styles/login.css";

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
    await fetch("https://market-backend-1-mmzk.onrender.com/api/user/login", {
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
      console.log(responseData.error);
    }
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <section className="login row m-0 w-100 mb-5 px-3 px-sm-5 px-lg-0">
        <div className="img d-none d-lg-block col-lg-6 m-0 p-0">
          <img className="img-fluid" src={image} alt="Signup Visual" />
        </div>
        <div className="col-1 d-none d-lg-block"></div>
        <div className="col-12 col-lg-5 mt-4 px-sm-5 px-lg-0 py-lg-5 pe-lg-5 ">
          <h2 className="px-sm-5 px-lg-0 text-center text-sm-start">
            Log in to Market.
          </h2>
          <p className="px-sm-5 px-lg-0 text-center text-sm-start">
            Enter your details below
          </p>
          <div className="my-4 px-sm-5 px-lg-0 pe-lg-5">
            <CustomInput
              type="email"
              name="email"
              value={formData.email}
              handleFormData={handleFormData}
              placeholder="Email"
              className={"mt-4"}
            />

            <CustomInput
              type="password"
              name="password"
              value={formData.password}
              handleFormData={handleFormData}
              placeholder="Password"
              className={"mt-4"}
            />

            <div className="d-flex flex-column flex-md-row align-items-center gap-4 my-3">
              <button
                onClick={() => login()}
                className="bg-red white login-button mt-2 mt-md-0 d-flex align-items-center justify-content-center gap-2"
              >
                <FaSignInAlt />
                <span>Login</span>
              </button>

              <button className="login-google-button d-flex align-items-center justify-content-center red gap-2 my-md-4">
                Forget Password?
              </button>
            </div>

            <p className="d-flex align-items-center justify-content-center gap-3">
              <span>Don't have an account?</span>
              <Link className="red text-decoration-underline" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
