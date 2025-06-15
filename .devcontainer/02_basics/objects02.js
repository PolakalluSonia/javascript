//obj-singleton-using constructor 
const appUser = new Object() //obj - singleton
const abc = {} // literal obj no single ton

// for both the output would be the same 

console.log(appUser);
console.log(abc)

// creating a empty obj and then declaring the var 

const user = {}
user.id = "42";
user.name = "Sonia";
user.isLoggedIn = false;
console.log(user)

//obj inside obj 

const regUser = {
      email : "sonia@gmail.com",
      fullName : {
        first_name : "Sonia",
        second_name : "Polakllu",
        full_name:"Polakallu Sonia"
      },
      age : "19"
}

console.log(regUser);
console.log(regUser.email);
console.log(regUser.fullName);
console.log(regUser.fullName.first_name);
console.log(regUser.fullName.second_name);
console.log(regUser.fullName.full_name);
console.log(regUser.age);

//merging obj 

const obj =
{
    1 : "a",
    2 : "b"
}
const obj1 = {3:"c",4:"d"}
const obj2 = {obj,obj1}
console.log(obj2)
    //or 
         /* we can use assign operator 
         it is target and source 
         ->target is always the startiong elelment 
         -> source everything beside or after tar 
         -> all the soruces will get merged into target
         */

const obj3 = {5:"e" , 6:"f"}
const obj4 = {7:"g",8:"h"}
const obj5 = Object.assign({},obj3,obj4)  
console.log(obj5)  

//spred (...obj,..obj)

const obj6 = {...obj1,...obj3}
console.log(obj6)

/*obj inside an array to access it 
a FOR LOOP can be used or we can use 
user[index].objKey */

//other methods in obj 

console.log(Object.keys(user)); //gives keys as arrays 
console.log(Object.values(user));//gives val as arrays
console.log(Object.entries(user));// gives key val pairs as array 

//to check if smthg is there or not in the obj 
console.log(user.hasOwnProperty('name')) //returns a boolean val
console.log(regUser.hasOwnProperty('fullName'))
console.log(regUser.fullName.hasOwnProperty('full_name'))




