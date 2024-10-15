import React from "react";
import Container from "./Container";
import FeaturedCollectionsProductCard from "./FeaturedCollectionsProductCard";

const FeaturedCollections = () => {
  return (
    <Container class1="home-wrapper-2 featured-wrapper py-4 py-sm-5 px-2">
      <div className="row">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="border-left bg-red"></div>
          <p className="red mb-0">This Month's</p>
        </div>
        <div className="col-12 mb-2">
          <h2 className="mb-0">Featured Collections</h2>
        </div>
        <FeaturedCollectionsProductCard />
      </div>
    </Container>
  );
};

export default FeaturedCollections;
