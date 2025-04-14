//primitive 
//7types : strin,Number,Boolean,null,undefined,Symbol,BigInt
// it is a dynamic programming language 
//reference type or nonprimitive 
// array , objects , functions 
//how to define symbol
const id = Symbol('123')
const id1 = Symbol('123')
console.log(id === id1) //output false 
const heros = ["abd","xyz","lmnop"]
console.log(heros);
 let obj ={
    name : "sonia",
    age : 22,
     }
     console.log(obj);
//funtion 
const myfun =function (){console.log ("Hello world");}     
console.log(myfun());
console.log("********type of data  types used **************");
console.log(typeof (heros));
console.log(typeof (obj));
console.log(typeof (myfun()));

