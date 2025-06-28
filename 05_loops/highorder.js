// for of (gives values by default) - maps ,arr , stirngs (yes)
        // obj,int
           
/*
syntax :
for (const index of arr(need not necessarily be array works on any datatype like string  ) )
{
}
*/
const arr = [1,2,3,4,5]
for (const i of arr)
{
    console.log(i);
}
const s = " sonia "
for (let i of s)
{
    console.log(i)
}

// Maps /*no dupes all unique */

const map = new Map ()
map.set('IN',"India")
map.set('Fr',"France")
map.set('US',"United States")
console.log (map)
// this gives element of the map as arrays 
for (const i of map)
{
    console.log(i);
}
/* to avoid it we can hold key and value 
seperately 
syntax - for (const [key(i),value(j)] of map)
{
}
*/
for(const [key,val] of map)
{
    console.log(key);
    console.log(val);
}
//will not work for obj
// const myObj = {
//     num1:1,
//     num2:2,
//     num3:3,
//     num4:4
// };
//  for (const [i,j] of myObj)
//  {
//     console.log(`${i} - ${j}`)
//  }
