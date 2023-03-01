import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free returns</p>
            </div>
            <div className='col-6'>
            <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='tel:+8801635501610'>+8801635501610</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h1>
                <Link to="/" className='text-white'>Market.</Link>
              </h1>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-10'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className='d-flex align-items-center gap-10'>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favopurite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className='d-flex align-items-center gap-10'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0'>Log in <br/> My account</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-10'>
                    <img src="/images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="d-flex align-items-center btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header