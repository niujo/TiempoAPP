const request = require('request');

var geocodeDireccion = (address, callback) => {
  var encodeDireccion = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeDireccion}&key=AIzaSyDzuERadsgXwnOWCWsf3YNTHhEP5OTOnaM`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('No se puede conectar a servidores de Google.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('No se puede encontrar la direccion.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeDireccion = geocodeDireccion;


