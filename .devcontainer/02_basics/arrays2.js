//Arrays-2

const names = ["abc", "xyz" ,"lmn"];
const names1 = ["gbh","mpk" ,'sns'];
console.log(names)//print names 
console.log(names1) // print names1
names.push(names1)

/* when we push names1 
in names the 
entire array is pushed 
as it is so it(names) 
will consider names1 
to be a element if array*/
console.log(names)

// to acess 
console.log(names[0])
console.log(names1[0])
console.log(names[3])
console.log(names[3][1])

//concat 
const names2 = names.concat(names1);
console.log(names2);

//spread 
const name3 = [...names,...names1]
console.log(name3)

/* 
what are concat , spread , push 
concat : create a new array and 
concates(joins arr1 to arr2) we 
can only concacte 2 arr at a time
spread : create a new array and 
we can concate n number of arrays 
push : used to insert an element 
*/

// flat (spreads out all the subarray ina n array)
const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr1 = arr.flat(Infinity)
console.log(arr1);


/* to check if smthg is a array we use 
Array.isArray(name)
to convert it smthg into array we use 
Array.from(arrayName) */


/*if we are tryna convert an obj into array 
we have to specify if we want array of keys 
or values if not specified we will get a empty array*/


/*we can also use .of(n1,n2,n3) to convert 
any type of element into array)*/

let score1 = 100 ;
let score2 = 200;
let score3 = 300;
let score4 = (Array.of(score1,score2,score3));
console.log(score4);
