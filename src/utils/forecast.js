const request = require('request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const forecast = (lat,lon, callback) => {
    // const url = 'https://api.weatherapi.com/v1/current.json?key=df26414aaef446bb970104043232407&' +lat+"&"+lon
    const url = "https://api.weatherapi.com/v1/current.json?key=df26414aaef446bb970104043232407&q=" +lat+","+ lon
    request({url:url,json:true},(error, response) => {
        if (error) {
            callback("Not connected!", undefined)

        } else if(response.body.error) {
            callback("Incorrect co-ordinates", undefined)

        }

        else {
            callback(undefined,response.body.location.name)

        }
    })

}




  module.exports =forecast