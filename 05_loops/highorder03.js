// for each loop 
/*
syntax - arr.forEach(callback func (){
    loop body 
})
callback func-> to give a fucntion that tells what to do 
            but call back func doesnot have a name 
            so callback func syntax : (fucntion (parameters) {body})
 */
//arrays 

const arr = [1,2,3,4,5]
arr.forEach( function (item) {
    console.log(item)
})

//another variation (arrow funtion)
console.log("printing using arrow function")
arr.forEach ( (i)=>{
    console.log(i*i)
})
//another variation passing a func 
console.log("printing using  function")
function print(item){
    console.log(item)
}
 arr.forEach(print)
 /*when we pass parameters into funtions would it be arrow or normal 
 the paprameters tht we pass need not neccesarily be only index or val
 we can pass multiple parameters and get acces to the
 */
console.log("printing and passing mul parameters")
 arr.forEach( (item,index,arr)=>{
    {
        console.log(item , index, arr)
    }
 })
// multiple obj stored in arr 
console.log("obj in arrays accesing them using forEach")
const arr2 = [{},{num1:1,num2:2},{num1:3,num2:4}]
arr2.forEach( (key )=>{
    console.log(key.num1)
})
console.log("printing keys and values using for each")
arr2.forEach( (key,val)=>{
    console.log(key,val)
})