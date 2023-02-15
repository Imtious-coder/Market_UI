import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta>{"Our Store"}</Meta>
      <BreadCrumb title="Our Store" />
      <section className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* LEFT SIDE OPTIONS */}
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="" >
                        In Stock (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="" >
                        Out Of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="d-flex flex-wrap">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1" >S (2)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2" >M (0)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Phone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Watch</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headset</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speakers</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smart Watch</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">iPhone 13 Pro Max</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Best Smart watch in the town</h5>
                      <ReactStars
                        count={5}
                        size={20}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <strong>$ 299.02</strong>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/camera.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Digital Camera</h5>
                      <ReactStars
                        count={5}
                        size={20}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <strong>$ 799.09</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE PRODUCTS */}
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-inline-block" style={{width: "100px"}}>Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option defaultValue>Best Selling</option>
                      <option>Featured</option>
                      <option>Alphabetically, A-Z</option>
                      <option >Alphabetically, Z-A</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low </option>
                      <option>Date, new to old</option>
                      <option>Date, old to new</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex grid align-items-center gap-10">
                      <img onClick={() => {setGrid(3);}} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(4);}} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(6);}} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(12);}} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5 mt-3 d-flex justify-content-center">
                <div className="row gap-10">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStore