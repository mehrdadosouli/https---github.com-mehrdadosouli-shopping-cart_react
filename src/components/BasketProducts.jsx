import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import styles from "../components/basket.module.css";
import {cardContext} from "../context/CardContextProvider"
export default function BasketProducts() {
  const productSelected=useContext(cardContext)
  const {state,dispatch}=productSelected;




  
  return (
    <div style={{display:'flex',width:'100%'}}>
      <div style={{width:'100%'}}>
      {state.selectedItem.map((item) => {
        return <div className={styles.containerBasket} key={item.id}>
            <div className={styles.right}>
              <div className={styles.right_info}>
              <div className={styles.name}>{item.category}</div>
              <div className={styles.description}>{item.description}</div>
              <div>Total: {item.price * item.quantity} $</div>
              </div>
              <div className={styles.img}>
                <img src={item.image} alt="" />
                <div className={styles.product_info}>
                  <div>Price: {item.price}</div>
                  <div className={styles.buttons}>
                    <button className={styles.delete_btn} onClick={()=>dispatch({type:'DELETE_ITEM',payload:item})}>delete</button>
                    <span className={styles.number}>{item.quantity}</span>
                    <button className={styles.increase_btn} onClick={()=>{dispatch({type:'INCREASE',payload:item})}}>+</button>
                    <button className={styles.increase_btn} onClick={()=>dispatch({type:'DECREASE',payload:item})}>-</button>
                  </div>
                </div>
              </div>
              </div>
          </div>
      })}
      </div>
      <div className={styles.lefts}>
                <div className={styles.left_container}>
                  <span><Link to='/products'>Back to Home</Link></span>
                </div>
        </div>
    </div>
  );
}
