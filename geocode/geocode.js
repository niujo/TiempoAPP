const request = require('request')

let geocodeDireccion=(address,callback)=>{
    const encodeDireccion=encodeURIComponent(address)


    // 1052 el tejar

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeDireccion}&key=AIzaSyDzuERadsgXwnOWCWsf3YNTHhEP5OTOnaM`,
        json:true

    
    },(error,response,body)=>{

        if(error){
            callback('No se puede conectar al servicio de Google')
             
        }else if(body.status==='ZERO_RESULTS'){
            callback('No se encontro la direccion')
            
        }else if(body.status==='OK'){
            callback(undefined,{
                Direccion:body.results[0].formatted_address,
                Latitud:body.results[0].geometry.location.lat,
                Longitud:body.results[0].geometry.location.lng
            })
        }    
    });

}

module.exports.geocodeDireccion=geocodeDireccion;



