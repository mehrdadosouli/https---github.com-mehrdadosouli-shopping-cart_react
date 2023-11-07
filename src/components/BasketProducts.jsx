import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import styles from "../components/basket.module.css";
import {cardContext} from "../context/CardContextProvider"
export default function BasketProducts() {
  const productSelected=useContext(cardContext)
  const {state,dispatch}=productSelected;
  console.log(state);
  // const total=state.selectedItem.map(item=>{
  //   return (item.price * item.quantity)
  // })
  // let sum=0
  // const res=total.reduce((a,b)=>{
  //   return a + b
  // },0)
  // state.total=res;
  // state.selectedItem.forEach(item=>{
  //   console.log(item,'sum',sum);
  //    sum=sum + item.quantity
  //    return sum
  // })
  // state.countItem=sum
  // console.log(state.checkout);
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
                    {
                      item.quantity > 1 ?
                      <button className={styles.increase_btn} onClick={()=>dispatch({type:'DECREASE',payload:item})}>-</button>
                      :""
                    }
                  </div>
                </div>
              </div>
              </div>
          </div>
      })}
      </div>
      <div className={styles.lefts}>
                <div className={styles.left_container}>
                <span><Link to='/products'>stores</Link></span>
                  
                  <div className={styles.left_checkout}>
                    <div>
                      <span>all price : {state.total.toFixed(2)}</span>
                    </div>
                    <div>
                      <span>all count products: {state.countItem}</span>
                    </div>
                    <div>
                      <button onClick={()=>dispatch({type:'CLEAR'})}>clear</button>
                      <button onClick={()=>dispatch({type:'CHECKOUT'})}>checkOut</button>
                    </div>
                    {
                    !state.checkout ? 
                    <span><Link to='/products'>Back to Home</Link></span>
                    :""
                  }
                  </div>
                </div>
        </div>
    </div>
  );
}
