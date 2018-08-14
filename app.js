// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a:{//'a' is by default the alias for the address
//       demand: true,//demand means it is a 'required' field from the user
//       alias: 'address',
//       describe: 'Address to fetch weather',
//       string: true//the input from the user must be a string
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//   geocode.geocodeAddress(argv.a, (errorMessage, results) =>
//   {
//     if(errorMessage)
//     {
//       console.log(errorMessage);
//     }
//     else {
//       console.log(JSON.stringify(results,undefined,2));
//     }
//   });
const request = require("request");
request(
{
  url: 'https://api.darksky.net/forecast/d24352e105fa5a219c74d19fa9871c0a/19.1382514,77.3209555',
  json: true//We use json 'true' to tell 'request' to take the json and convert it into an object
},
(error, response, body) =>
{
  if(!error && response.statusCode === 200)
  {
    console.log(`Temperature: ${body.currently.temperature}`);
  }
  else {
    console.log('Bad Request. Enter another location');
  }
});
