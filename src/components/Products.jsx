import React, {useContext} from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import icon from "../icon/icons8-basket-96.png";
import { Link } from "react-router-dom";
import { AllproductsContext } from "../context/ProductsContextProvider";

// import BasketProducts from "./BasketProducts";
export default function Products() {
const usecontextproduct=useContext(AllproductsContext)

  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Shopping Card</h1>
        <div style={{display:"flex",alignItems:'center'}}>
          <img src={icon} alt="" />
          <span><Link to='/login'>Login</Link></span>
        </div>
      </div>
      <div className={styles.allproducts}>
        {usecontextproduct.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  </>
  )
}





