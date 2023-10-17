import React, { useEffect, useState,useContext } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import icon from "../icon/icons8-basket-96.png";
import { Link } from "react-router-dom";
import {AllproductsContext} from "../context/ProductsContextProvider"
// import BasketProducts from "./BasketProducts";
export default function Products() {
const [productGetData,setproductGetData]=useState([]);
const [basket,setbasket]=useState([]);
const [showbasket,setshowbasket]=useState(false);
const usecontextproduct=useContext(AllproductsContext)
useEffect(()=>{
 usecontextproduct.map(item=>{
  setproductGetData(usecontextproduct,item.count=0)
 })
})

   const Addtocard = (product) => {
    setbasket(prev=>(
      [...prev,product]
    ))
    console.log(basket);
  };
  
  //const dele=(id)=>{
  //  const result= basket.filter(item=>{
  //     return item.id !== id
  //   })
  //   setState({
  //     basket:result
  //   })
  // }





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
        {productGetData.map((item) => {
          return <Product key={item.id} {...item} func={Addtocard} />;
        })}
      </div>

       {/* <div className={styles.baskets}>
        <BasketProducts funcs={dele} name={basket} />  
       </div> */}
      

    </div>
  </>
  )
}





