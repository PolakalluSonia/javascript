//Dates
let date = new Date();
console.log(date);
//convert this into string to get a readable version 
stringDate = date.toString()
console.log(stringDate)
//printing diffrent date.to___() conversion 
console.log("**********conversions of date***************")
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(` only date ${date.toLocaleDateString()}`)//this gives what we write but in mm/day/yr
console.log(`date  and time ${date.toLocaleString()}`)
console.log(date.toLocaleTimeString())
console.log(typeof(date)); // interview 
/* months start from zero in js 
-> dates are objects in js (Date--keyword sort off) 
(like new int [] in java) 
-> to create a date we have to use new  keyword 
-> let date = new Date (yr, month , date );
*/
let createDate = new Date (2025,3,17)
console.log(createDate.toLocaleDateString())
// SEVERAL OTHER WAYS TO CREATE STRINGS
let createDate1 = new Date (2025,3,17,12,2)//(yr,month,date,hrs,sec);
console.log(`date + hrs and sec ${createDate1.toLocaleString()}`)
let createDate2  = new Date("2025-01-30")//if we are declaring it like this the nums start from 1 (yr-mm-day)
console.log(createDate2.toLocaleDateString());
// normal declaration dd-mm-yy
let createDate3 = new  Date ("01-01-2025")
console.log(createDate3.toLocaleDateString())
// we also have time stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createDate3.getTime())// to get the time stampp of the date 
//to convert into sec cause everything is in milli seconds
/* Date.now() gives us milli sec 
to convert this into secs do (Date.now())/1000
-> but this gives us points so we either round it of or use Math.floor(Date.now())*/
console.log(Math.floor(Date.now()/1000))
// to get any thing from the date use get keyword 
// ex datename.getMonth() etc etc 
// if the month or  day exceeds the limit it will give NaN
// write it in yy-mm-dd or  mm-dd-yy
let newDate1 = new Date("2424-1-24")
console.log(newDate1.getFullYear())
let newDate  = new Date ()
console.log(newDate.getMonth()+1)
// we can also define many other props using , 
console.log(newDate.toLocaleString('default',

{
    weekday:"long"
}
))

