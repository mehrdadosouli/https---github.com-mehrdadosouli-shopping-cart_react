import React, { Component } from "react";
import styled from "./Products.module.css";
import Product from "./Product";
import icon from "../icon/icons8-basket-96.png";
import axios from "axios";
import BasketProducts from "./BasketProducts";
import { Link } from "react-router-dom";
export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      productGetData: [{id: 1, title: 'DANVOUY Womens T Shirt Casual Cotton Short', count:0},{id: 2, title: 'DANVOUY Womens T Shirt Casual Cotton Short', count:0}],
      basket: [],
      showbasket:false,
    };
  }

  componentDidMount = () => {
   axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      response.data.map(item=>{
        item.count=0  
      })
     this.setState({
      productGetData:response.data.slice(0,5)
   })
  })
  }
  basketHandler = () => {
    this.setState(prev=>({showbasket:!prev.showbasket}))
  };


    Addtocard = (thiss, newCount) => {
      this.setState(prevState => {
        const updatedProductGetData = prevState.productGetData.map(item => {
          if (item.id === thiss.id) {
            return {...item,count:newCount};
          }
          return item;
        });
    
        return { productGetData: updatedProductGetData };
      });
    };
  
  // dele=(id)=>{
  //  const result= this.state.basket.filter(item=>{
  //     return item.id !== id
  //   })
  //   this.setState({
  //     basket:result
  //   })
  // }

  render() {
    return (
      <>
        <div className={styled.container}>
          <div className={styled.header}>
            <h1>Shopping Card</h1>
            <div style={{display:"flex",alignItems:'center'}}>
              <img src={icon} alt="" onClick={this.basketHandler} />
              <span><Link to='/login'>Login</Link></span>
            </div>
          </div>
          
            
          <div className={styled.allproducts}>
            {this.state.productGetData.map((item) => {
              return <Product key={item.id} {...item} func={this.Addtocard} />;
            })}
          </div>

           {/* <div className={styled.baskets}>
            <BasketProducts funcs={this.dele} name={this.state.basket} />  
           </div> */}
          

        </div>
      </>
    );
  }
}
