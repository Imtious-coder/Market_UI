import React from "react";
import { AiOutlineLaptop, AiOutlineSound } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import {
  FaBicycle,
  FaBluetoothB,
  FaBook,
  FaCar,
  FaDesktop,
  FaFootballBall,
  FaGamepad,
  FaGuitar,
  FaHeadphonesAlt,
  FaMedkit,
  FaMobileAlt,
  FaPaintBrush,
  FaPaw,
  FaPencilAlt,
  FaShoppingBasket,
  FaShoppingCart,
  FaTabletAlt,
  FaToolbox,
  FaTruck,
  FaTshirt,
  FaUtensils,
} from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";
import "../styles/categories.css";
import Container from "./Container";

const categories = [
  {
    name: "Camera",
    items: 10,
    icon: <BsFillCameraFill />,
  },
  {
    name: "Headphone",
    items: 101,
    icon: <FaHeadphonesAlt />,
  },
  {
    name: "Laptop",
    items: 200,
    icon: <AiOutlineLaptop />,
  },
  {
    name: "Pet Supplies",
    items: 180,
    icon: <FaPaw />,
  },
  {
    name: "TV",
    items: 404,
    icon: <FaDesktop />,
  },
  {
    name: "Watch",
    items: 202,
    icon: <IoWatch />,
  },
  {
    name: "Mobile",
    items: 320,
    icon: <FaMobileAlt />,
  },
  {
    name: "Tablet",
    items: 150,
    icon: <FaTabletAlt />,
  },
  {
    name: "Gaming Consoles",
    items: 95,
    icon: <FaGamepad />,
  },
  {
    name: "Home Appliances",
    items: 80,
    icon: <FaUtensils />,
  },
  {
    name: "Football",
    items: 210,
    icon: <FaFootballBall />,
  },
  {
    name: "Books",
    items: 550,
    icon: <FaBook />,
  },
  {
    name: "Art Supplies",
    items: 45,
    icon: <FaPaintBrush />,
  },
  {
    name: "Stationery",
    items: 190,
    icon: <FaPencilAlt />,
  },
  {
    name: "Speaker",
    items: 400,
    icon: <AiOutlineSound />,
  },
  {
    name: "Cars",
    items: 100,
    icon: <FaCar />,
  },
  {
    name: "Trucks",
    items: 75,
    icon: <FaTruck />,
  },
  {
    name: "Bicycles",
    items: 300,
    icon: <FaBicycle />,
  },
  {
    name: "Tools",
    items: 250,
    icon: <FaToolbox />,
  },
  {
    name: "Clothing",
    items: 700,
    icon: <FaTshirt />,
  },
  {
    name: "Musical Instruments",
    items: 140,
    icon: <FaGuitar />,
  },
  {
    name: "TWS",
    items: 502,
    icon: <FaBluetoothB />,
  },
  {
    name: "Groceries",
    items: 1000,
    icon: <FaShoppingBasket />,
  },
  {
    name: "Fruit's",
    items: 1000,
    icon: <GiFruitBowl />,
  },
  {
    name: "Healthcare",
    items: 350,
    icon: <FaMedkit />,
  },
  {
    name: "Others",
    items: 402,
    icon: <FaShoppingCart />,
  },
];

const Categories = () => {
  const scrollLeft = () => {
    const container = document.querySelector(".category");
    container.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    const container = document.querySelector(".category");
    container.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  };

  return (
    <Container class1="categories py-2 py-sm-3 px-3 my-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="border-left bg-red"></div>
        <p className="red mb-0">Categories</p>
      </div>
      {/* buttons */}
      <div className="d-flex align-items-center justify-content-between gap-5">
        <h2 className="mb-0 me-5">Shop By Categories</h2>
        <div className="buttons d-none d-md-flex align-items-center justify-content-end gap-4">
          <button className="scroll-btn-left" onClick={() => scrollLeft()}>
            {"<"}
          </button>
          <button className="scroll-btn-right" onClick={() => scrollRight()}>
            {">"}
          </button>
        </div>
      </div>
      {/* cards */}
      <div className="category mt-4">
        {categories.map(({ name, items, icon }, index) => {
          return (
            <div key={index} className="card">
              <h5 className="mb-2">{icon}</h5>
              <p title={name}>
                {" "}
                {name.length > 8
                  ? name.split("").slice(0, 8).join("") + ". . ."
                  : name}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
