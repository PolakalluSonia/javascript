const name = "sonia"
const count = 42
console.log (name + " " +  count  + " Value ")// not preferable 
// so use backtics ``
console.log(`Hello i am ${name} my roll no is ${count} value`); //aka string intercollision
const objName = new String ("Polak-allu");
// console.log(objName);
// console.log(typeof(objName));
// console.log(objName.__proto__)
console.log(objName.charAt(2));
console.log(objName.indexOf("P"));
const newString = objName.substring(0,4);//divides in to substring doesnot include idx 4 cannot give neg values
console.log(newString);
const a= objName.slice(-1,4);
console.log(a);
const space = "           sonia           "
console.log (space);
console.log (space.trim());  
/// for more about trim go to trim javascript mdn
// replace , remove , includes 
console.log(objName.split('-'));


