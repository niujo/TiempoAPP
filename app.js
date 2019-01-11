const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./clima/clima');

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

geocode.geocodeDireccion(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getClima(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`Hay actualmente ${weatherResults.temperature}. Sensacion termica : ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
