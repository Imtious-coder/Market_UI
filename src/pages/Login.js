import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <section className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form action="" className="d-flex flex-column gap-15 mt-4">
                  <div>
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="d-flex justify-content-center align-items-center mt-3 gap-15">
                      <button className="button border-0">Login</button>
                      <button className="button2 border-0">Sign up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login