import forecastData from "./forecastData.js"
import fetch from 'node-fetch'

const fetchForecast=async(latitude,longitude)=>{
    try{
        const response=await fetch(forecastData(latitude,longitude))
        const forecastResponse=response.json()
        return forecastResponse

    }catch(error){
        return{Error:'Unable to connect to service'}

    }

}

export default fetchForecast