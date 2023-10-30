const isInCard=(state,id)=>{
    const res=state.selectedItem.find(item=>item.id == id)
   if(res){
    return res
   }else{
    return res
   }
    
    
}

export {isInCard}