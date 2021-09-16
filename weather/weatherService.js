import fetchGeolocation from "../geolocation/geolocationService.js"
import fetchForecast from "../forecast/forecastService.js"

const getWeatherUpdates=async(address)=>{
        const geolocation =await fetchGeolocation(address)
        if('Error'in geolocation){return geolocation}//returns an Error object (connection)
        if(geolocation.features.length==0){return {Error:'Please enter a valid address'}}//if invalid address was provided
        else{
            const geolocationObject={ longitude:geolocation.features[0].center[0],latitude: geolocation.features[0].center[1],location: geolocation.features[0].place_name }
            const forecast= await fetchForecast(geolocationObject.latitude,geolocationObject.longitude)
            if('Error'in forecast){return forecast}//returns an Error object (connection)
            else{
            
                const forecastObject={
                    location: geolocation.features[0].place_name,
                    weatherDescription:forecast.current.weather_descriptions[0],
                    temperature:forecast.current.temperature,
                    feelsLike:forecast.current.feelslike,
                    windSpeed:forecast.current.wind_speed,
                    humidity:forecast.current.humidity
                }
                const data=forecastObject.weatherDescription+' , It is '+ forecastObject.temperature +' out there, feels like '+forecastObject.feelsLike+".  "+'Wind speed:'+forecastObject.windSpeed+" km / h  "+' Humidity :'+forecastObject.humidity+'%'
                const location=forecastObject.location
                return {location:location,weather:data}
                 }
                       
        }     
        
}

export default getWeatherUpdates