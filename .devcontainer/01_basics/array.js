//ARRAYS 
//ARRAYS in js are resizable 
//can be mixed elements in the array 
//access-arr[0]
//Arrays in js make shallow copy (props share the same reference- change in one og array will change the coied array )

const arr = [1,2,3,4,5,6];
const arr1 = ["abc","xyz"];
const arr2 = new Array(1,2,3,4,5);
console.log(arr[0]);//1
console.log(arr1[0]);//abc
console.log(arr2[0]);//1
 

//////////ARRAY METHOD
 //arr.includes(ele)
 //arr.indexOf(ele)
arr.push(7); // 1-7
arr.push(8); //1-8
arr.pop();  // removes the top most ele
arr.unshift(9); //adds ele in the beginning ny shifing the rem elements 
arr.shift();  // removes the ele in the begin
const newArr = arr.join();//converts the array into string 
console.log(newArr);
console.log(typeof(newArr));



//slice , splice 
console.log("A",arr); // normal array 

const slice = arr.slice(1,3) // inlcudes(prints) only 1,2 but not 3
// printing sliced array 
console.log("slice",slice );
// printng the og array after slice 
console.log("OG",arr);
const splice = arr.splice(1,3); //inlcudes(prints) only 1,2,3
//printing splice array 
console.log("SPLICE", splice);
//printing the og array after splice 
console.log("OG", arr); // it does not print the spliced values 

/////////////INTERVIEW
/* slice doennot modify the original arr where as splice modifies the original array 
slice doesnot include (x,y) y and splice includes y */

