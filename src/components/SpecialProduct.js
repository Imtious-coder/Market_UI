import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const SpecialProduct = () => {
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src="images/watch.jpg" alt="watch"/>
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Smart watch 3 pro, top sales...</h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp;
              <strike>$289</strike> 
            </p>
            <div className="discount-till d-flex align-items-center gap-1">
              <p className="mb-0">
                <strong>5</strong> days
              </p>
              <div className="d-flex align-items-center gap-1">
                <span className="badge rounded-circle p-2 bg-danger text">01</span>:
                <span className="badge rounded-circle p-2 bg-danger text">41</span>:
                <span className="badge rounded-circle p-2 bg-danger text">21</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '78%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <Link to="/"  className="button">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct