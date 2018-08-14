/*Lets see how exactly a function in Nodejs works with this example:*/
var getUser=(id, callback) => //function declaration
{
  var user =
  {
    id: id,
    name: 'Omkar'
  }
  callback(user);
};
//This is how a function is defined:
// Intially it performs task associated with the 'id'
// Then at the last it calls the callback function.

getUser(25,(userObject)=>
{
  console.log(userObject);
});
//Since we need the user details, hence we pass an variable as an argument.
// This userObject is nothing but the user, in the function.
