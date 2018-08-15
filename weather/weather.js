const request = require("request");

var getWeather = (latitude, longitude, callback) =>
{
  request(
  {
    url: `https://api.darksky.net/forecast/d24352e105fa5a219c74d19fa9871c0a/${latitude},${longitude}`,
    json: true//We use json 'true' to tell 'request' to take the json and convert it into an object
  },
  (error, response, body) =>
  {
    if(!error && response.statusCode === 200)
    {
      callback(undefined,
      {
        Temperature: body.currently.temperature,
        Apperent: body.currently.apparentTemperature
      });
    }
    else
    {
      callback('Bad Request. Enter another location');
    }
  });
}
module.exports.getWeather = getWeather;
