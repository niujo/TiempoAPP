const request = require('request')
const yargs = require('yargs');

const argv=yargs
.options({
    d:{
        demand:true,
        alias:'direccion',
        describe:'Direccion para buscar el clima',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

const encodeDireccion=encodeURIComponent(argv.a)

// 1052 el tejar

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=El%20tejar%201052%20castro%20chile&key=AIzaSyDzuERadsgXwnOWCWsf3YNTHhEP5OTOnaM',
    json:true
},(error,response,body)=>{


    //console.log(JSON.stringify(response,undefined,2));
    console.log(`Direccion : ${body.results[0].formatted_address}`);
    console.log(`Latitud   : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitud  : ${body.results[0].geometry.location.lng}`)
});
