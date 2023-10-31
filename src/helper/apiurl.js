import axios from "axios"
const apiurl=async()=>{
    const Base_Url="https://fakestoreapi.com"
    const response=await axios.get(`${Base_Url}/products`)
    .then(res=>{
        return res.data
    })
    return response
}
export {apiurl}