import axios from "axios"
const apiurl=()=>{
    const Base_Url="https://fakestoreapi.com"
    const response=axios.get(`${Base_Url}/products`)
    .then(res=>{
        return res.data
    })

    return response
}
export {apiurl}