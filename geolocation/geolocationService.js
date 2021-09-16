import fetch from 'node-fetch'
import geoLocationData from './geolocationData.js'


const fetchGeolocation=async(address)=>{

    try{
        const response = await fetch(geoLocationData(address))
        const geoLocationResponse=response.json()
        return geoLocationResponse}
    catch(error){
        return{Error:'Unable to connect to service'}
    }
    
}


export default fetchGeolocation
