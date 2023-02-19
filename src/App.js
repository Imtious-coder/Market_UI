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
import Signup from './pages/Signup';
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
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="compare-product" element={<CompareProduct/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="login" element={<Login/>} />
          <Route path="forgot-password" element={<Forgotpassword/>} />
          <Route path="signup" element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
