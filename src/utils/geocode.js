const request =require('request')


const geocode = (region,callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=df26414aaef446bb970104043232407&q=" + region
    request({url: url,json:true}, (error, response)=>{
        if (error) {
            callback("No network connection!!",undefined)

        } else if(response.body.error){
            callback("Location not found",undefined)

        }

        else {
            callback(undefined,{
                latitude:response.body.location.lat,
                longitude: response.body.location.lon})

        }
    })

}


module.exports = geocode