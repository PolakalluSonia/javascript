//loops for obj - for in(gives keys ny default)
// for in works for obj , arr ,strings
// doesnot work with num , maps 
const myObj = {
    num1:1,
    num2:2,
    num3:3,
    num4:4
};
//this wil give only keyys 
for(const key in myObj)
{
    console.log(key);
}
//this will give only values 
for (const key in myObj)
{
    console.log(myObj[key])
}
//to print both key and value 
for(const key in myObj)
{
    console.log(`${key} - ${myObj[key]}`)
}
const arr = [1,2,3,[7,8,9]]
// this will give the keys of an array (index)
for (let i in arr)
{
    console.log(i);
    
}
//this will give the values
for (let i in arr)
{
    console.log(arr[i]);
    
}
// maps -> not iteratable
const map = new Map ()
map.set('IN',"India")
map.set('Fr',"France")
map.set('US',"United States")
for (let i in map)
{
    console.log(map[i])
}
const s = "sonia "
for (let i in s)
{
    console.log(i) // keys 
    console.log(s[i]) //values
}
const num = 1234
for (let i in num)
{
    console.log(i);
    console.log(num[i]);
}