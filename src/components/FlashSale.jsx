import React from "react";
import "../styles/flashSales.css";
import Container from "./Container";
import Countdown from "./Countdown";
import FlashSaleProductCard from "./FlashSaleProductCard";

const FlashSale = () => {
  return (
    <Container class1="flash-sale py-2 py-sm-3 px-3 my-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="border-left bg-red"></div>
        <p className="red mb-0">Today's</p>
      </div>
      <div className="d-flex align-items-end gap-5">
        <h2 className="mb-0 me-5">Flash Sales</h2>
        <Countdown time={2} />
      </div>
      <div className="products">
        <FlashSaleProductCard />
      </div>
    </Container>
  );
};

export default FlashSale;
