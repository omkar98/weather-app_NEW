const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
var data;

const argv = yargs
  .options({
    a:{//'a' is by default the alias for the address
      demand: true,//demand means it is a 'required' field from the user
      alias: 'address',
      describe: 'Address to fetch weather',
      string: true//the input from the user must be a string
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  geocode.geocodeAddress(argv.a, (errorMessage, results) =>
  {
    if(errorMessage)
    {
      console.log(errorMessage);
    }
    else {
      console.log(`Address: ${results.address}`);
      //Here getweather function takes lat and long as argument and triggers a callback function providing with the error and the weatherResults object.
      weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
        if(errorMessage)
        {
          console.log(errorMessage);
        }
        else {
          console.log(`Its currently ${weatherResults.Temperature}. However it feels like ${weatherResults.Apperent}.`);
        }
      });
    }
  });
  //19.1382514,77.3209555
