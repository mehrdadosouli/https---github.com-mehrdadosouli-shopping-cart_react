 export const validation =(data)=>{
    const errors={}
    if(!data.text){
        errors.username='please enter username'
    }else{
        delete errors.username
    }
    if(!data.password){
        errors.userpass='please enter password'
    }else{
        delete errors.password
    }
    if(!data.checkbox){
        errors.ckeckboxes='please select checkbox'
    }else{
        delete errors.checkbox
    }
    return errors
}