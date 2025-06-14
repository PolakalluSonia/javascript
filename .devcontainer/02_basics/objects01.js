//objects - has keys & values 

/* there are two ways to create an obj
->literal - will not create a singleton
->constructor - will create a singleton*/

//singleton - no instances will be created

// object-literals 

const user = {} // empty objects 
const sym = Symbol("sony")//declare a symbol
const user1 = {
    name/*key*/:"Sonia"/*val*/,
    age:20,
    loc:"Nandyal",
    email:"sonia@gmail.com",
    isLogged:false,
    LastLoggedInDays:["MON","FRI"],
    [sym]:"sonia" //this is how u use on obj 
}

console.log(user1)


//acessing objects

console.log(user1.name); //need not convert the attributes(keys) into strings
console.log(user1["age"])// should convert the attributes into strings 
console.log((user1[sym]))
console.log(user1["email"])

//changing the objects 

user1.email = "xyz@email.com";
user1.name = "xyz";

console.log(user1)
//freezing obj 
/* the values will remain same no matter
how may times we want to change , 
it will also not throw any errors */
// user1.name = "Polakallu Sonia";
// user1.email = "polakallu@gmail.com"
// Object.freeze(user1)
// console.log(user1);

/*when a symbol is to be put into a object 
then there is a diff syntax tht we hv to use 
->create a symbol (const sym_name = Symbol(name))
-> inside the object 
[symbol_name]:symbol;
*/

//funtions 
 
user1.g = function()
{
    console.log("hello world")
}
console.log(user1.g())

/* we use this key word to access 
the values of the user in the funtion
-> this key word is used when we hv to 
to reffer to the same obj*/

user1.g2 = function()
{
    console.log(`hello user, ${this.name}`)
}
console.log(user1.g2())