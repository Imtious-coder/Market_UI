import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Image2 from "../Assets/Images/watchP.jpg";
import Image1 from "../Assets/Images/watchP1.jpg";
import Image3 from "../Assets/Images/watchP2.webp";
import Image4 from "../Assets/Images/watchP4.jpg";
import Image from "../Assets/Images/watchPMain.jpg";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [image, setImage] = useState(Image);
  const orderedProduct = false;
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-2 py-md-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-12">
                <div className="main-image px-sm-5 px-md-0">
                  <img
                    src={image}
                    alt="product_Image"
                    className="w-100 h-100 main-image"
                  />
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center pt-3 pt-sm-5">
                <div>
                  <img
                    onClick={() => setImage(Image1)}
                    src={Image1}
                    alt="product_Image"
                    className="other-images border"
                  />
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center pt-3 pt-sm-5">
                <div>
                  <img
                    onClick={() => setImage(Image2)}
                    src={Image2}
                    alt="product_Image"
                    className="other-images border"
                  />
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center pt-3 pt-sm-5">
                <div>
                  <img
                    onClick={() => setImage(Image3)}
                    src={Image3}
                    alt="product_Image"
                    className="other-images border"
                  />
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center pt-3 pt-sm-5">
                <div>
                  <img
                    onClick={() => setImage(Image4)}
                    src={Image4}
                    alt="product_Image"
                    className="other-images border"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4 mt-sm-5 mt-md-0">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Silver Stainless Steel Case with Sport Band
                </h3>
              </div>
              <div className="border-bottom pb-3 pt-1">
                <p className="price mb-0">$ 199.00</p>
                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />{" "}
                  -<p className="mb-0 review-count">&#40; 7 reviews &#41;</p>
                </div>
                <a href="#review">Write a review</a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data"> Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">
                    Watch - Laptop - Mobile - Smart watch
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge text-dark border border-secondary">
                      S
                    </span>
                    <span className="badge text-dark border border-secondary">
                      M
                    </span>
                    <span className="badge text-dark border border-secondary">
                      XL
                    </span>
                    <span className="badge text-dark border border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-2">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="row my-3">
                  <div className="col-12 d-flex align-items-center">
                    <h3 className="product-heading me-2">Quantity :</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        placeholder="0"
                        min={1}
                        max={20}
                        className="form-control"
                        style={{ width: "70px", height: "30px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 my-3">
                    <div className="d-flex align-items-center gap-10">
                      <button className="button">ADD TO CART</button>
                      <button className="button2">Buy It Now</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30 my-4">
                  <div className="d-flex align-items-center gap-10">
                    <a href="lol" className="d-flex align-items-center">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <a href="lol" className="d-flex align-items-center">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic order within{" "}
                    <strong>5-10 business days!</strong>
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-10 my-3">
                  <h3 className="product-heading mb-0">Copy Product Link :</h3>
                  <a
                    href="#test"
                    onClick={() => {
                      copyToClipboard("https://market.com/product/watch");
                    }}
                    className="mb-0"
                  >
                    https://market.com/product/watch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <p className="bg-white p-3">
              The stainless steel case is durable and polished to a shiny,
              mirror-like finish. The Sport Band is made from a durable yet
              surprisingly soft high-performance fluoroelastomer with an
              innovative pin-and-tuck closure. See even more band types. Try
              different case materials. Express your personal style in the Apple
              Watch Studio. Only at Apple.
            </p>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
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
                {orderedProduct ? (
                  <>
                    <Link
                      className="text-dark text-decoration-underline"
                      to="/"
                    >
                      Write a review
                    </Link>
                  </>
                ) : (
                  ""
                )}
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
                    <textarea
                      className="w-100 form-control"
                      placeholder="Comments"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="d-block ms-auto">
                    <button type="submit" className="button border-0">
                      Submit Review
                    </button>
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
                  <p className="mb-0 mt-2">
                    Verry good product. There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour{" "}
                  </p>
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
                  <p className="mb-0 mt-2">
                    Verry good product. There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
