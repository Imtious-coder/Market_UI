import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';


const SingleProduct = () => {
  // const props = {width:400, height:500, zoomWidth:500, img:"/images/watch.jpg"};
  const orderedProduct = false;
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <section className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  {/* <ReactImageZoom {...props} /> */}
                  <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
              </div>
              <div className="other-product-images d-flex gap-3 flex-wrap">
                <div className="">
                  <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="">
                  <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="">
                  <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="">
                  <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
      <section className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <h4>Description</h4>
                <p className="bg-white p-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 7 reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct ? <>
                      <Link className="text-dark text-decoration-underline" to="/">Write a review</Link>
                      </> : ""
                  }
                </div>
                <div className="review-form py-4">
                  <h4>Write a review :</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                    </div>
                    <div>
                      <textarea className="w-100 form-control" placeholder="Comments" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="d-block ms-auto">
                      <button type="submit" className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Abu Hasan</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-0 mt-2">Verry good product. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                  </div>
                  <div className="review mt-4">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Imtious Islam</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-0 mt-2">Verry good product. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Our Popular Products</h3>
                </div>
                <ProductCard />
              </div>
            </div>
      </section>
    </>  
  )
}

export default SingleProduct