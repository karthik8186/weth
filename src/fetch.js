
import axios from "axios"



// 64787c2ed6271a0d2bc94afcb626612c

// https://api.openweathermap.org/data/2.5/weather

const url="https://api.openweathermap.org/data/2.5/weather"
const API="64787c2ed6271a0d2bc94afcb626612c"

const Fetchdata=async(query)=>{
    let {data} = await axios.get(url,{
     params:{
        q:query,
        APPID:API,
        units:"metric"
     }
    })
    return data
}
export default Fetchdata