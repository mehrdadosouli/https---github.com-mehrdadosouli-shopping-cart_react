import React, { Component } from "react";
import Products from "./components/Products";
import BasketProducts from "./components/BasketProducts";
import Login from "./components/Login";
import Detail from "./components/Detail";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContextProvider"
import CardContextProvider from "./context/CardContextProvider";


export default class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <CardContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/basket" element={<BasketProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/detail/:id" element={<Detail />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          </CardContextProvider>
      </ProductsContextProvider>
    );
  }
}
