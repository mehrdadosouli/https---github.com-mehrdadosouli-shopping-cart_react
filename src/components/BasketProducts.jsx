import React from "react";
import styled from "./Product.module.css";
export default function BasketProducts(props) {
  
  return (
    <>
      {props.name.map((item) => {
        return (
          <div className={styled.containerBasket} key={item.id}>
            <div className={styled.img}>
              <img src="" alt="" />
            </div>
            <span className={styled.name}>{item.title.slice(0, 15)}</span>
            <span className={styled.body}>{item.body.slice(0, 100)+'...'}</span>
            <button className={styled.btnDelete} onClick={()=>props.funcs(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
