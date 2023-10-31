import React, { useContext, useEffect, useState } from "react";
import { AllproductsContext } from "../context/ProductsContextProvider";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Detail() {
  const style = { width: "150px" };
  const [state, setState] = useState();
  const id = useParams();
  const allProducts = useContext(AllproductsContext);
  useEffect(() => {
    const fetch = async() => {
        const result = await allProducts.find((item) => item.id == id.id);
        setState(await result);
      };
      fetch();
  }, []);
  
  
  return (
    <>
      <div style={{padding:'0.5rem',fontSize:'24px',backgroundColor:'gray',width:'5rem',borderRadius:'10px'}}><Link style={{textDecoration:'none'}} to="/products">Products</Link></div>
      <Section className="container_detail" style={{boxShadow:'0 0 4px 1px #80808026 ',padding:'1rem',margin:'2rem'}}>
        {state ? (
          <>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%'}}>
              <h3>{state.category}</h3>
              <span>price = {state.price}</span>
              <span>rate = {state.rating.rate}</span>
              <p>{state.description}</p>
            </div>
            <div>
              <img src={state.image} style={style} />
            </div>
            
          </>
        ) : (
          ""
        )}
      </Section>
    </>
  );
}
