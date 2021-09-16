const forecastData=(latitude,longitude)=>{
    const url='http://api.weatherstack.com/current?access_key=4827d6d6dd0e2e64b8dcd133da49224f&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    return url
}

export default forecastData