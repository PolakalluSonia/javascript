//functions 

/* when we donnot know how manny parameters 
we are gonna pass in the function */

/* 
...parameter_name 
this ... can be called as spread and rest 
depending on use case 
*/

function shoppingCartprice (...num1)
{
      return num1
}
console.log(shoppingCartprice(200,300,400))

function restcheck (val1,val2, ...num2)
{
    return num2
}
console.log(restcheck(500,600,700)) //output will be 700 only cause val1 and val2 will be taken by the first 2 arguments 

const user = 
{
    username :"sonia",
    age : 19,
    college : "GRIET"
}

//how to pass an object in the funtion or handle it in a function 

function handleObj(anyobj)
{
    console.log(`username is  ${anyobj.username} and age is ${anyobj.age}`)
                            //parameter.keyname            //parameter.keyname
}
// ways pass args during fun calls 
handleObj(user)
// passing obj directly 
handleObj(
    {
        username:"polakallu",
        age:20
    }
)


/* 
we hv to check type safety 
meaning - check if the parameter passed 
is available or not 
add if-else etc etc 
*/

const Myarr = [200,300,400,500]
function displayArr (arr)
{
    console.log(`the array passed is ${arr}`)
}
displayArr(400,5000,50005,60)
displayArr(Myarr)