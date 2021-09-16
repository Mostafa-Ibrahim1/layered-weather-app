const geoLocationData=(address)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9iYWsiLCJhIjoiY2tzaHhpOTVvMWY2MzJub2ZwZWE4MWdzdiJ9.hhUrU-HpRf0rQRs3iximxg&limit=1'
    return url
}

export default geoLocationData