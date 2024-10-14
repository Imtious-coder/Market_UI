import React from "react";
import Container from "./Container";
import ProductCard from "./ProductCard";

const FeaturedCollections = () => {
  return (
    <Container class1="home-wrapper-2 featured-wrapper py-4 py-sm-5 px-2">
      <div className="row">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="border-left bg-red"></div>
          <p className="red mb-0">This Month</p>
        </div>
        <div className="col-12 mb-2">
          <h2 className="text-center text-sm-start">Featured Collections</h2>
        </div>
        <ProductCard />
      </div>
    </Container>
  );
};

export default FeaturedCollections;
