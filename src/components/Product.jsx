import React, { Component } from 'react'
import styles from "./Product.module.css"
// import icon from "../icon/icons8-basket-48.png"
export default class Product extends Component {

  clickHandler(id){
    this.props.func(id)
  }
  render() {
    const {title,price,image,id}=this.props
    return (
      <>
        <div className={styles.container}>
            <div className={styles.img}> 
                 <img src={image} alt="" /> 
            </div>
            <span className={styles.name}>{title.slice(0,15)}</span>
            {/* <span className={styles.price}>{price} $</span> */}
            <button id={id} className={styles.btn} onClick={this.clickHandler.bind(this,id)}>
                {/* <img src={icon} alt="" /> */}
                <span>Add to card</span>
            </button>
        </div>
      </>
    )
  }
}
