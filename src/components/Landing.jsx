import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import AddProduct from "./AddProduct";
import Products from "./Products";
import Test from "./Test";
import ColorHome from "./ColorHome";
import ColorA from "./ColorA";
import ColorB from "./ColorB";
import ColorC from "./ColorC";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import { Cart } from "./Cart";
import { CartForDel } from "./CartForDel";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addprod" element={<AddProduct />} />
        <Route path="/prod" element={<Products />} />
        <Route path="/prodlist" element={<ProductList />} />
        <Route path="/proddetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartdel" element={<CartForDel />} />
        {/* <Route path="/test" element={<Test />} />
        <Route path="/color" element={<ColorHome />} />
        <Route path="/cola" element={<ColorA />} />
        <Route path="/colb" element={<ColorB />} />
        <Route path="/colc" element={<ColorC />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
