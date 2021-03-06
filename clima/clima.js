const request = require('request')
let getClima = (lat, lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/ee293fc095b9fe715a5d86b89a42b0c7/${lat},${lng}`,
        json:true
    },(error,response,body)=>{
        if (error) {
            callback('No se puede conectar a los servidores de Forecast.io.');
          } else if (response.statusCode === 400) {
            callback('No se puede encontrar el clima.');
          } else if (response.statusCode === 200) {
            callback(undefined, {
              temperature: ((body.currently.temperature-32)/1.8).toFixed(1),
              apparentTemperature:((body.currently.apparentTemperature-32)/1.8).toFixed(1)
            });   
        }     
    })
}

//ºC = (ºF -32) / 1,8
module.exports.getClima=getClima;