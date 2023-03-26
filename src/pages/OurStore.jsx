import React, { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [filter, setFilter] = useState("d-none");
  const [grid, setGrid] = useState(6);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-3 py-sm-5">
        <div className="row m-0">
          {/* LEFT SIDE FILTERS */}
          <div className="col-12 col-sm-4 col-md-3 p-0">
            <div className="row">
              <div className="col-12 px-2 mb-3 d-none d-sm-block">
                <div className="filter-card p-2 p-sm-3">
                  <h3 className="filter-title mb-0 mb-sm-2">
                    Shop By Categories
                  </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-sm-2">Watch</li>
                      <li className="mb-sm-2">TV</li>
                      <li className="mb-sm-2">Camera</li>
                      <li className="mb-sm-2">Laptop</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 px-2">
                <div className="filter-card p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="filter-title mb-0 text-center text-sm-start">
                      Filter By
                    </h3>
                    <FaArrowAltCircleDown
                      className="text-secondary filter-arrow hvr-color1"
                      onClick={() =>
                        filter === "d-none"
                          ? setFilter("d-block")
                          : filter === "d-block"
                          ? setFilter("d-none")
                          : ""
                      }
                    />
                  </div>
                  <div className={`${filter}`}>
                    <h5 className="sub-title m-0 mb-1 mb-sm-2 mt-3">
                      Availablity
                    </h5>
                    <div className="d-flex flex-sm-column gap-3 gap-sm-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          In Stock (2)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Out Of Stock (0)
                        </label>
                      </div>
                    </div>
                    <h5 className="sub-title my-1 my-sm-3">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <input
                        type="number"
                        className="form-control ps-2 py-1"
                        id="floatingInput"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        className="form-control ps-2 py-1"
                        id="floatingInput1"
                        placeholder="Max"
                      />
                    </div>
                    <h5 className="sub-title mb-1 mb-sm-2">Colors</h5>
                    <Color />
                    <h5 className="sub-title mb-1 mb-sm-2">Size</h5>
                    <div className="d-flex flex-sm-column gap-3 gap-sm-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S (2)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="form-check-label" htmlFor="color-2">
                          M (0)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE PRODUCTS */}
          <div className="col-12 col-sm-8 col-md-9 mt-2 mt-sm-0 mx-0 px-0 px-sm-2">
            <div className="row mx-0 pt-2 pb-3 pb-sm-2 px-2 mx-sm-2 bg-white rounded-3">
              <div className="col-12 col-md-6 py-2 d-flex align-items-center gap-1 gap-sm-3">
                <p className="mb-0 d-inline-block" style={{ width: "100px" }}>
                  Sort By:
                </p>
                <select
                  defaultValue={"Featured"}
                  name=""
                  className="form-control form-select py-1 sort"
                  id=""
                >
                  <option>Best Selling</option>
                  <option>Featured</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low </option>
                  <option>Date, new to old</option>
                  <option>Date, old to new</option>
                </select>
              </div>
              <div className="col-12 col-md-6 mt-2">
                <div className="d-flex align-items-center gap-2">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex grid align-items-center gap-10">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr3.svg"
                      className="d-none d-md-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-none d-md-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5 mt-3 d-flex justify-content-center">
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
