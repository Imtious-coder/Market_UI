import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <section className="wishlist-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <img src="images/cross.svg" className="position-absolute cross img-fluid" alt="cross" />
                <div className="product-card-image">
                  <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-product-details">
                  <h5 className="title"> Smart watch that will blow your mind.</h5>
                  <h6 className="price my-3"> $ 49.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <img src="images/cross.svg" className="position-absolute cross img-fluid" alt="cross" />
                <div className="product-card-image">
                  <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-product-details">
                  <h5 className="title"> Smart watch that will blow your mind.</h5>
                  <h6 className="price my-3"> $ 49.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist