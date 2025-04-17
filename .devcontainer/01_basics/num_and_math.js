const score =400;
console.log(score);
const balance = new Number(100);
console.log(balance)
console.log(balance.toString());//now that the number is converted into string  u can apply string props  to it !!
console.log(balance.toString().length);
console.log(typeof(balance))
console.log(typeof(balance.toString()));
console.log(balance.toFixed(2))//gives  decimal point upto that number in this case upto 2 numbers 
/* use .toFixed methods while building a ecommerce website*/
const otherNum = 42.92679
console.log(otherNum.toPrecision(2));
/* precision rounds up the values  
to from the beginning dosent matter where 
 the point is */
 const hun = 1000000
 console.log(hun.toLocaleString())// puts commas according to us number systems 
 //to get indian number sys values  
 console.log(hun.toLocaleString('en-IN'));
 console.log("****************MIN AND MAX VALS**************************")
 console.log(Number.MIN_VALUE);
 console.log(Number.MAX_VALUE);
 console.log("*********************MIN AND MAX SAFE INT VALS")
 console.log(Number.MIN_SAFE_INTEGER); // like Integer.MIN_VALUE in java
 console.log(Number.MAX_SAFE_INTEGER); // like Integer.MAX_VALUE in java
 //++++++++++++++++++++++++  Maths+++++++++++++++++++++
 //Math is a object 
 console.log(">>>MATHS<<<")
 console.log(Math.abs(-4))//-ve to +ve .. +ve to +ve
 console.log(Math.round(4.6));//roundds up 
 /* can use Math.ceil(number) and Math.floor(number)*/
 console.log(Math.min(2,3,4,10));
 console.log(Math.max(100,456,829,1));
 console.log(Math.random());/* is a function which we most commonly
  use and takes up values upto
   0-1 (it can be zero)  now this random can be multipled or added with by any number */
   console.log(((Math.random())*10)+1);//so tht zero won't be there
   const min = 10;
   const max =20;
   console.log((Math.random()*(max-min+1)))//formula to remeber  
   //  NOW TO GET SINGLE INTEGER WRAP THE ENTIRE THING IN Math.floor function
   console.log (Math.floor(Math.random()*(max-min+1)))// this will give u values  from 0-max to avoid that add min
   console.log (Math.floor(Math.random()*(max-min+1))+min)


 