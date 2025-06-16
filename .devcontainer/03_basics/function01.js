//FUNCTIONS 

/* 
syntax 
fuction name ()
{
    body;
}
name() // function call 
name //function reference 
*/
 
function add(num1,num2)
{
   let a = num1+num2;
   console.log(a)
}
add(3,4)
add(3,"4") // concates and gives 34 
add(3,"b") // concates and gives 3a
add(3,null) // gives 3

/* 
we can store a function in a variable 
but the typw would be undefined 
why so ?
because we are retuning nthg 
*/
const res = add(4,5);
console.log(typeof(res))


function sub(num1,num2)
{
//    b = num1+num2;
//    return b;
return num1-num2
}

const c = add(4,5);
console.log(c)
console.log(typeof(c))

/* 
function loginmess(username) 
we can also give 
default values like username="sonia"
inside the fun parameter
*/

function loginmess(username) 
{
    if (username === undefined) // if (!username) can also be used
    {
        console.log("please enter a unsername")
        return 
    }
    
    return `${username} just logged in`
}
console.log(loginmess('sonia'))
console.log(loginmess())

