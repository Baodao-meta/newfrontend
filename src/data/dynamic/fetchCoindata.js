import axios from "axios";
import cors from 'cors'

let url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?&id=1,270,825,2010&CMC_PRO_API_KEY=9f72ac76-34fa-4bdb-8a3e-a8d45cfd5aed"
const GetData = async() => {
    const {data} = await axios.get(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error)=>{
        console.log(error)
    })
    return data
}

export default GetData
