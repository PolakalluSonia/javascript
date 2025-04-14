// two types pf memory 
/*  stack(primitive) and heap(non prmitive) memory */
let name = "Sonia";
let anotherName = name;
anotherName = "Polakallu"
console.log(anotherName);
console.log(name);
/*all the PRIMITIVE var gets stored in stack memory and when did such thing as about the original value
is NOT CHANGED because a reference val is not provided the value just gets duplicated and stores
DOSENOT POINT TO THE REFERENCE  */
let user1 =
{
    userName :"Sonia",
    emailId :"123@gmail.com"
}
let user2 = user1;
console.log(user1);
console.log(user2);
user2.emailId = "S@gmail.com";
console.log(user1);
console.log(user2);
//to print single element of the object use objectName.elementName
console.log(user1.userName); 
/* where as in non primitive the  value is CHANGED because the 2 reference var are pointing to the SAME value 
it points to the reference*/


