//Immediately Invoked Funtion Expressions (IIFE)
/* to avoid pollution from global scope
we use iife*/

//normal way
function one ()
{
    console.log(`nw-DB CONNECTED`)
}
one();

//using iife 

/*
syntax -> ()()
-> (funtion name and body)()
 */
//named IIFE
(function two()
{
    console.log(`iife-DB CONNECTED`)
})();

//ARROW FUNCTION IIFE aka unnamed IIFE

( () => {
    console.log(`DB ARROW FUNCTION(iife)`)
}) ();

/* ____________________________________NOTE_____________________________________________________*/
/*while using IIIFE end every function call 
meaning end every second brace with a semi colon(;)
indicating that the function is completed 
then only the funntions will run or else they wont */

//passing  parameters and args

( (name) => {
    console.log(`DB ARROW FUNCTION(iife) ${name}`)
}) ("POLAKALLU SONIA")
