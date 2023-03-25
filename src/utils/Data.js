import iPad1 from "../Assets/Images/iPad1.png";
import Image1 from "../Assets/Images/watchP.jpg";
import Image2 from "../Assets/Images/watchP1.jpg";
import Image3 from "../Assets/Images/watchP2.webp";
import Image from "../Assets/Images/watchPMain.jpg";

export const services = [
  {
    title: "Free Shipping",
    image: "/images/service.png",
    tagline: "From all orders over $100"
  },
  {
    title: "Daily Surprise Offers",
    image: "/images/service-02.png",
    tagline: "Save up to 25% off 😲"
  },
  {
    title: "Support 24/7",
    image: "/images/service-03.png",
    tagline: "Shop with an expert 🛍️"
  },
  {
    title: "Secure Payments",
    image: "/images/service-05.png",
    tagline: "100% Protected Payments ✅"
  }
]
export const productData = [
  {
    id: 1,
    image: Image,
    image1: Image1,
    image2: Image2,
    image3: Image3,
    title: "Apple Watch",
    description: "The best smart watch in the market. More than 50 features just in 100mm",
    details: "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure. See even more band types. Try different case materials. Express your personal style in the Apple Watch Studio. Only at Apple.",
    price: 399,
    brand: "Apple",
    type: "Watch",
    reviewNumbers: 4,
    totalReviews: 2,
    tags: ["Watch", "Mobile", "Smart Watch"],
    size: [ "S" , "M" ],
    availablity: "In Stock",
    Color: "grey",
    quantity: 60,
    productLink: "https://market.com/product/watch"
  },
  {
    id: 2,
    image: iPad1,
    title: "iPad Pro",
    description: "Latest smart tab for smart peoples. Enjoy the huge 16 GB RAM now.",
    price: "502",
    brand: "Apple",
    type: "Tablet",
    availablity: "In Stock",
    size: "M",
    quantity: 202
  },
  {
    id: 3,
    image: "/images/acc.jpg",
    title: "TWS PRO 3",
    description: "The best TWS at lowest price. 48 hrs of huge backup for nonstop music.",
    price: "501",
    brand: "Market",
    type: "Watch",
    availablity: "Stock Out",
    size: "M",
    quantity: 0
  },
  {
    id: 4,
    image: "/images/speaker.jpg",
    title: "Wireless Speaker",
    description: "Bluetooth 5.3 with a 80mm speaker. Fill the room with bad music.",
    price: "400",
    brand: "ATM",
    type: "Speaker",
    availablity: "In Stock",
    size: "S",
    quantity: 8
  },
  {
    id: 5,
    image: "/images/tab1.jpg",
    title: "TAB 3",
    description: "Smart tab for kids. 2k+ science book available. Specially made for kids.",
    price: "403",
    brand: "Market",
    type: "Tablet",
    availablity: "In Stock",
    size: "L",
    quantity: 2
  },
];

export const blogData = [
  {
    image: "/images/main-banner-1.jpg",
    date: "TODAY",
    title: "A Beautiful Sunday Morning Renaissance",
    description:
      "You're Only Good As Your Last Collection. Which Is An Enormous Pressure. I think There Is Something About...",
  },
  {
    image: "/images/catbanner-02.jpg",
    date: "09 MARCH 2023",
    title: "All Inside. Just One Tap to Enjoy",
    description:
      "I think There Is Something About. You're Only Good As Your Last Collection. Which Is An Enormous Pressure...",
  },
  {
    image: "/images/main-banner.jpg",
    date: "09 MARCH 2023",
    title: "Refresh Your Mind By Music & Be Happy",
    description:
      "Music Is The Only Thing That Can Chnage Someone's Thought In Just Few Seconds. Enjoy Listening The Music...",
  },
  {
    image: "/images/catbanner-01.jpg",
    date: "YESTERDAY",
    title: "A Beautiful Sunday Morning Renaissance",
    description:
      "Only You Have The Rights To Choose The Best For You. Just Click Read More Button To Learn More About This...",
  },
];