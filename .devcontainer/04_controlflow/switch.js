//switch 
/*
syntax 
switch(key)
{
case value : 
      break;
default : 
     break;      
}
 */

const month = 12
switch (month)
{
    case 1:
        console.log("JAN")
        break;
    case 2:
        console.log("FEB")
        break;
    case 3:
        console.log("MAR")
        break;
    case 4:
        console.log("APR")
        break;
    case 5:
        console.log("MAY")
        break;
    case 6:
        console.log("JUN")
        break;
    default :
         console.log("not in the first 6 months")
        break;
}
/*if there is no break in between cases
then all cases will get executed except for default
*/