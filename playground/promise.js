//Syntax: new Promise(()=>{});
var addAsync = (a,b) =>
{
    return new Promise((resolve, reject) =>{
    if(typeof a === 'number' && typeof b === 'number')
    {
      resolve(a+b);
    }
    else
    {
      reject('Enter valid numbers');
    }
  });
}
//In this function the first ()=>{} is always success message while the second is always for failed case.
// addAsync().then(()=>{addAsync()},()=>{}).then(()=>{}, ()=>{});
//This is the best practice for writing the promises function:
//Here, at any stage if the function returns an error, it is passed to the catch function
addAsync(5,7).then((res)=>
{
  console.log(res);
  return addAsync(res,8);
}).then((res1) =>
{
  console.log(res1);
}).catch((errorMessage)=> {
 console.log('Enter valid numbers');
});
// var somePromise = new Promise((resolve, reject)=>
// {
//   //resolve('Hey! I made my promise!');
//   reject('I tried, but couldnot make the promise');
// });
// /*somePromise.then(()=>{}, ()=>{});*/ //The first function is for resolve while the second one is for reject.
// somePromise.then((message)=>
// {
//   console.log(message);
// },
// (errorMessage)=>
// {
//   console.log(errorMessage);
// });
//
// /*A function can run at once only, i.e either resolve or reject. If its resolved, reject will now work.
// Also, neither can run twice.
// */
