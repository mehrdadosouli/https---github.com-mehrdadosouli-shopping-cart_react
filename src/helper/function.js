const isInCard=(state,id)=>{
    const res=state.selectedItem.find(item=>item.id == id)
    console.log(res);
    if(!res){
        return false
    }
    if(res){
        return true
    }
}

export {isInCard}