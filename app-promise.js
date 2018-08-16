const yargs = require('yargs');
const axios = require('axios');
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
  var encodedAddress = encodeURIComponent(argv.a);
  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;
  //axios.get() returns a promise with functions - response and error
  axios.get(geocodeURL).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS')
    {
      throw new error ('Unable to find the location');
    }
    console.log(response.data.results[0].formatted_address,);
    var latitude= response.data.results[0].geometry.location.lat;
    var longitude=response.data.results[0].geometry.location.lng;
    weatherURL = `https://api.darksky.net/forecast/d24352e105fa5a219c74d19fa9871c0a/${latitude},${longitude}`;
    return axios.get(weatherURL);
  }).then((response1)=>{
    var Temperature = response1.data.currently.temperature;
    var Apperent = response1.data.currently.apparentTemperature;
    console.log(`Its ${Temperature}, but it feels like ${Apperent}`);
  }).catch((e)=>{
    if(e.code === 'ENOTFOUND')
    {
      console.log('Cannot connect to the API Servers');
    }
    else{
      console.log(e.message);
    }
  });
