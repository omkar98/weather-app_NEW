const request = require("request");
var geocodeAddress = (address) =>
{
  return new Promise((resolve, reject)=>{
    request(
    {
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURIComponent(address),
      json: true//We use json 'true' to tell 'request' to take the json and convert it into an object
    },
    //This is basically a callback error function:
    (error, response, body) =>
    {
      //If we don't use JSON.stringfy, it clips the objects and doesn't show everything present in the object.
    // By making json: true and converting the data received from the google api, we have an object. No to expand this object and look everything through it, we need to stringyfy it:
      //console.log(JSON.stringify(body, undefined, 4));
      //for proper indentation, we require to adjest the third argueemnt of the JSON.stringify. Hence we keep the 2nd argument undefined.
      if(error)
      {
        reject('Unable to connect to the Google Servers');
      }
      else if(body.status === 'ZERO_RESULTS')
      {
        reject('Unable to fetch the required Address.. Please enter another address');
      }
      else if(body.status === "OK")
      {
        //to declare an object you only need to specify the properties of object within the parenthesis --> {}
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng
        });
      }
    //console.log(`Address: ${body.results[0].address_components[0].types[0]}`);
    //The above example expalins when to set indexes '[]'.
    //Whenever you find [], it means its a part of associative array.
    }
    );
  });
};

geocodeAddress('431604').then(
  (location)=>
  {
    console.log(JSON.stringify(location, undefined, 2));
  },
  (errorMessage)=>
  {
    console.log(errorMessage);
  });
