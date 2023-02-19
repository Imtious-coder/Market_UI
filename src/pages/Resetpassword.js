import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <section className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-4">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15 mt-3">
                  <div>
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="confpassword" placeholder="Confirm Password" className="form-control" />
                  </div>
                  <div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-2 gap-15">
                      <Link to="/reset-password">
                        <button className="button border-0" type="submit">Submit</button>
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
        </div>
      </section>
    </>
  )
}

export default Resetpassword