import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Contact from './pages/Contact';
import Forgotpassword from './pages/Forgotpassword';
import Home from './pages/Home';
import Login from './pages/Login';
import OurStore from './pages/OurStore';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Resetpassword from './pages/Resetpassword';
import ShippingPolicy from './pages/ShippingPolicy';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';
import TermsAndCondition from './pages/TermsAndCondition';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="store" element={<OurStore/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="blog/:id" element={<SingleBlog/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="compare-product" element={<CompareProduct/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="forgot-password" element={<Forgotpassword/>} />
          <Route path="reset-password" element={<Resetpassword/>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="refund-policy" element={<RefundPolicy/>} />
          <Route path="shipping-policy" element={<ShippingPolicy/>} />
          <Route path="terms-and-condition" element={<TermsAndCondition/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
