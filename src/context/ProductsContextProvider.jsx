import React, { useEffect, useState ,createContext} from "react";
import { apiurl } from "../helper/apiurl.js";

export const AllproductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setData(await apiurl());
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