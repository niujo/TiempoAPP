const yargs = require('yargs');
const axios = require('axios')



const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var encodeDireccion = encodeURIComponent(argv.address);
  let geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeDireccion}&key=AIzaSyDzuERadsgXwnOWCWsf3YNTHhEP5OTOnaM`

  axios.get(geocodeUrl).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
      throw new  Error('No es posible encontrar la direccion')
    }
    
    let lat=response.data.results[0].geometry.location.lat;
    let lng=response.data.results[0].geometry.location.lng;
    let weatherUrl=`https://api.darksky.net/forecast/ee293fc095b9fe715a5d86b89a42b0c7/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response)=>{
    //C=(F-32)/1.8)//para un decimal toFixed(1),
    let temperatura=((response.data.currently.temperature-32)/1.8).toFixed(1)
    let temperaturaAparente=((response.data.currently.apparentTemperature-32)/1.8).toFixed(1);
    console.log(`La temperatura es:${temperatura}. Y sensacion termica de ${temperaturaAparente} `)
  }).catch((e)=>{
    if(e.code==='ENOTFOUND'){
      console.log('No es posible conectarse a la API')
    }else{
      console.log(e.message);
    }
  })