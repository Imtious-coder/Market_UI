import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Signup = () => {
  return (
    <>
      <Meta title={"Sign up"} />
      <BreadCrumb title="Sign up" />
      <section className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15 mt-4">
                  <div>
                    <input type="text" name="First name" placeholder="First Name" className="form-control" />
                  </div>
                  <div>
                    <input type="text" name="Last name" placeholder="Last Name" className="form-control" />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center mt-3 gap-15">
                      <button className="button border-0">Create</button>
                      {/* <Link to="/signup">
                        <button className="button2 border-0">Sign up</button>
                      </Link> */}
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

export default Signup