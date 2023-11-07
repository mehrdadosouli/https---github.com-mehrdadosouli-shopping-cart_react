import React, { createContext, useReducer } from 'react'
export const cardContext=createContext()
const initialState={
    selectedItem:[],
    total:0,
    checkout:false,
    countItem:0
}
const handler=(item)=>{

    const countItem=item.reduce((first,product)=>{
        return first + product.quantity
    },0)
    const total=item.reduce((items,product)=>{
        return items + product.price * product.quantity
    },0)
    return {total,countItem}
}
const productReducer=(state,action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItem.find(item=>item.id === action.payload.id )){
                state.selectedItem.push({
                    ...action.payload,
                    quantity:1
                })
                
            }
            return {
                ...state,
                selectedItem:state.selectedItem,
                checkout:false,
                ...handler(state.selectedItem)
            }
            case "DELETE_ITEM" :
                const result= state.selectedItem.filter(item=>item.id !== action.payload.id)
            return {
                    ...state,
                    selectedItem:[...result],
                    checkout:true,
                    ...handler(result)
            }
            case "INCREASE" :
                    const indexI=state.selectedItem.findIndex(index=>index.id == action.payload.id);
                    state.selectedItem[indexI].quantity++;
            return {...state,
                checkout:true,
                ...handler(state.selectedItem)}
            case "DECREASE" :
                const indexD=state.selectedItem.findIndex(index=>index.id == action.payload.id);
                if(state.selectedItem[indexD].quantity > 0){
                    state.selectedItem[indexD].quantity--;
                }
                
            return {...state,
                checkout:true,
            ...handler(state.selectedItem)}
            case "CHECKOUT" :
                if(state.checkout){
                    alert('checkout is successfully')
                }
            return {
                selectedItem:[],
                total:0,
                checkout:true,
                countItem:0
                }
            case "CLEAR" :
            return {
                selectedItem:[],
                total:0,
                checkout:false,
                countItem:0
            }
        default:
            return state
            
    }
}

const CardContextProvider =({children})=> {
    const [state,dispatch]=useReducer(productReducer,initialState)
  return (
    <cardContext.Provider value={{state,dispatch}}>
        {children}
    </cardContext.Provider>
  )
}

export default CardContextProvider