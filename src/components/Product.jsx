import React, { useContext, useEffect, useState } from 'react'
import styles from "./Product.module.css"
import { Link } from 'react-router-dom';
import {cardContext} from "../context/CardContextProvider"
import { isInCard } from '../helper/function.js';

export default function Product(props) {

  const {state,dispatch}=useContext(cardContext)
  const {image,title,id}=props
  return (
    <>
    <div className={styles.container}>
        <div className={styles.img}> 
             <img src={image} alt="" /> 
        </div>
        <span className={styles.name}>{title.slice(0,15)}</span>    
          <div><Link to={`/products/detail/${id}`}>Detail</Link></div>
          {
            !isInCard(state,id) ? 

            <span id={id} className={styles.btn} onClick={()=>dispatch({type:'ADD_ITEM',payload:props})}>Add to card</span>  : 
            <div className={styles.addbtn}> 
              <div className={styles.btns}>
                {
                  isInCard(state,id).quantity > 1 ? <button onClick={()=>dispatch({type:'DECREASE',payload:props})}>-</button> : <button onClick={()=>dispatch({type:'DELETE_ITEM',payload:props})}>Delete</button>
                }
                <button onClick={()=>dispatch({type:'INCREASE',payload:props})}>+</button>
              </div>
             </div>
          }
    </div>
  </>
  )
}

