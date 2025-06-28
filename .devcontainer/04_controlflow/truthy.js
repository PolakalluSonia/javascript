//Truty falsy 
/*
Falsy values - false , 0 , -0, BigInt (0n)
               null , ""(no spaces), undefined , NaN
Truthy values - "0",'false'," "(spaces),[],{},fuction{}{}
*/
const email = "soniajnvs09@gmail.com"
if (email)
{
    console.log("Got the email");
}
else
{
    console.log("Didnot get the email");
}
/* 
to check if array is empty we use length 
function array.length===0 
to check if the obj is empty we first convert 
the obj into array by using 
Object.keys(objectname) then use the length funtion
Obkect.keys(objectname).length===0
*/
