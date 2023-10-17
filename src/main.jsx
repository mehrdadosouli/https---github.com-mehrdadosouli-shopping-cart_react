import React from "react";
import ProductsContextProvider from "./context/ProductsContextProvider";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>
);
