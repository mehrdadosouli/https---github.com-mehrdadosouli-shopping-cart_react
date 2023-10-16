import React, { Component } from 'react'
import styles from "./Product.module.css"
import { Link } from 'react-router-dom';
export default class Product extends Component {
  constructor(){
    super();
    
  }
  addtoocardHandler=(e)=>{
      this.props.func(this.props,1)
      
  }
  render() {
    const {title,image,id,count}=this.props;
    return (
      <>
        <div className={styles.container}>
            <div className={styles.img}> 
                 <img src={image} alt="" /> 
            </div>
            <span className={styles.name}>{title.slice(0,15)}</span>    
            {!count ? <span id={id} className={styles.btn} onClick={this.addtoocardHandler}>Add to card</span> : 
             <div className={styles.addbtn}> 
              <div><Link to="/product/detail/:id">Detail</Link></div>
              <div className={styles.btns}>
                <button>Delete</button>
                <button>+</button>
              </div>
             </div>
            }
        </div>
      </>
    )
  }
}
