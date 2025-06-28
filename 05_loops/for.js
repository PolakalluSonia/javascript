//loops aka iterations 
//for loop 
for (let i = 0;i<=10;i++)
{
    var ele = i ; 
    console.log(ele);
}
//console.log (`printing outside the loop using var ${ele}`)

// if else in a for loop 
 const arr = [ 1,2,3,4,5]
 for(let i =0;i<arr.length;i++)
 {
    if ((arr[i] % 2)==0)
    {
        console.log("Even number");
    }
    else
    {
        console.log("Odd number");
    }
 }

 // nested loop 
 for(let i =0;i<2;i++)
 {
    console.log(`outer loop ${i}`);
    for(let j =0;j<3;j++)
    {
        console.log (`innner loop ${j}`);
    }
 }
 // printing an ele in the array 
  const arr1 = [100,200,300,400];
  console.log(arr1.length);
  for(let i=0;i<arr1.length;i++)
  {
    console.log(arr1[i]);
  }

  // if it goes out of the bound it gives undefined

  //key words 
  /*
   break and continue 
   */
  // BREAK - jumps outside the scope 
  for(let idx =0;idx<=20;idx++){
      if (idx == 5)
        {
           console.log(`detected 5`);
           break;
        }
    
    console.log(`value of i id ${idx}`);

  }
  //continue  - does not jump out the scope for 1 makes a excuse
  for(let idx =0;idx<=10;idx++){
      if (idx == 5)
        {
           console.log(`detected 5`);
         continue
        }
    
    console.log(`value of i id ${idx}`);

  }
    
    