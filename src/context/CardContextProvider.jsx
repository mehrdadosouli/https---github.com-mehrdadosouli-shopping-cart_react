import React, { createContext, useReducer } from 'react'
export const cardContext=createContext()
const initialState={
    selectedItem:[],
    total:0,
    checkout:false,
    countItem:0
}
const productReducer=(state,action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItem.find(item=>item.id === action.payload.id )){
                state.selectedItem.push({
                    ...action.payload,
                    quantity:1,
                })
            }
            return {
                ...state,
                selectedItem:[...state.selectedItem]
            }
            case "DELETE_ITEM" :
                const result= state.selectedItem.filter(item=>item.id !== action.payload.id)
            return {
                    ...state,
                    selectedItem:[...result]
            }
            case "INCREASE" :
                    const indexI=state.selectedItem.findIndex(index=>index.id == action.payload.id);
                    state.selectedItem[indexI].quantity++;
            return {...state}
            case "DECREASE" :
                const indexD=state.selectedItem.findIndex(index=>index.id == action.payload.id);
                state.selectedItem[indexD].quantity--;
            return {...state}
            case "CHECKOUT" :
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