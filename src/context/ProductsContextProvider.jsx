import React, { useEffect, useState } from "react";
import { apiurl } from "../helper/apiurl.js";

export const AllproductsContext = React.createContext();

const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await apiurl();
        setData(products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <AllproductsContext.Provider value={data}>
      {children}
    </AllproductsContext.Provider>
  );
};

export default ProductsContextProvider;