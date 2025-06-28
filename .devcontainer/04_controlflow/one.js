// control or logic flow 
// >,<,<=,>=,==,!=,===(checks type),!==(checks neg sign),??
// &&,||
//if
/*
syntax
if(condition)
{
body
}
 */

const  loggedin = true 
const temp =42
if (temp < 50)
{
     console.log("Less than 50")
}
console.log("Temp > 50")

// in this case if and the other console both get executed 
//is why we use else 

const temp1 =420
if (temp1 < 50)
{
     console.log("Less than 50")
}
else
{
console.log("Temp > 50")
}

//short hand notation 

const bal = 5000000
if (bal > 500) console.log("test");
/*
if (bal > 500) console.log("test"),concole.log("hello");
we can write multiple lines in a single if
using a coma (,)
but not prefferable at all 
*/

//nested 

if(bal < 500)
{
     console.log("less than 500")
}
else if(bal <750)
{
    console.log("less than 750")
}
else if(bal < 900)
{
    console.log("less than 900")
}
else{
    console.log("> than 12000")
}

//
 const userlogin = true 
 const debitcard = true
 if (userlogin && debitcard)
 {
    console.log("allow to buy")
 }
 // Nullish Coalescing Operator (??): null undefined
 let val1;
 val1 = 5??10
 console.log(val1)
 val2 = null ?? 15 
 console.log(val2)
 val3 = undefined ?? 20
 console.log(val3)
 val4 = null ?? 25 ?? 30
 console.log(val4)

 //terniary operator 
 /*syntax - condition(statement) ? true(statement): flase(statement)  */

 const price = 100;
 price <=80 ? console.log("less than 80") : console.log("More than 80")
