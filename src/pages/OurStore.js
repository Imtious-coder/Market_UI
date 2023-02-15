import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <>
      <Meta>{"Our Store"}</Meta>
      <BreadCrumb title="Our Store" />
      <section className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* LEFT SIDE OPTIONS */}
            <div className="col-3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* RIGHT SIDE PRODUCTS */}
            <div className="col-9">

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStore