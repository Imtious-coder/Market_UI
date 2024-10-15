import React, { useContext } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../strore/useStore";
import "../styles/featuredCollectionsProductCard.css";

const FeaturedCollectionsProductCard = ({ grid }) => {
  // const [allProducts, setAllProducts] = useState([]);
  const { allProducts } = useContext(ShopContext);
  let location = useLocation();

  // ALL PRODUCTS API
  // useEffect(() => {
  //   fetch("http://localhost:4000/allproducts")
  //     .then((res) => res.json())
  //     .then((data) => setAllProducts(data));
  // }, []);

  console.log({ allProducts });

  // SCROLL FUNCTIONALITY
  const scrollLeft = () => {
    const container = document.querySelector(".featured-product-card-row");
    container.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    const container = document.querySelector(".featured-product-card-row");
    container.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="featured-collections-product-card product-card-container position-relative">
      {/* slider buttons */}
      <div className="buttons d-none d-md-flex align-items-center justify-content-end gap-4">
        <button className="scroll-btn-left" onClick={() => scrollLeft()}>
          {"<"}
        </button>
        <button className="scroll-btn-right" onClick={() => scrollRight()}>
          {">"}
        </button>
      </div>

      <div className="featured-product-card-row">
        {allProducts?.map(
          ({ id, name, description, image, new_price, old_price }, index) => {
            return (
              <div key={index} className="product-card-wrapper me-2 mt-2">
                <Link
                  to={`/product/${id}`}
                  onClick={() =>
                    location.pathname.includes("product")
                      ? window.scrollTo(0, 0)
                      : ""
                  }
                  className="product-card-link"
                >
                  <div className="image position-relative">
                    <img src={image[1]} className="" alt="product_image" />
                  </div>
                  {/* name */}
                  <p className="color1 mt-2 mb-0 fw-bold" title={name}>
                    {name.length > 12
                      ? name.split("").slice(0, 12).join("") + "..."
                      : name}
                  </p>
                  <small
                    className="color1 mb-2 d-flex flex-wrap"
                    title={description}
                  >
                    {description.length > 25
                      ? description.split("").slice(0, 20).join("") + "..."
                      : description}
                  </small>
                  {/* prices */}
                  <div className="prices d-flex align-items-center gap-3">
                    <p className="red mb-0"> {new_price} BDT </p>
                    <small className="color1">
                      <del>{old_price} BDT</del>
                    </small>
                  </div>
                  {/* reviews */}
                  <div className="reviews d-flex align-items-center gap-2">
                    <div
                      style={{ display: "flex", justifyContent: "start" }}
                      className="ratings"
                    >
                      <ReactStars
                        count={5}
                        size={18}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <small className="color1">(2)</small>
                  </div>
                </Link>
                {/* action bar */}
                <div className="action-bars position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <FaRegHeart className="hvr-color1 fs-6 white" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <FaRegEye className="hvr-color1 fs-6" />
                    </button>
                    {/* <button className="border-0 bg-transparent">
                      <TiArrowRepeat className="hvr-color1 fs-5" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <FaCartPlus className="hvr-color1 fs-6" />
                    </button> */}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default FeaturedCollectionsProductCard;
