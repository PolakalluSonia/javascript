//EXECUTION + CALL STK IN JS 
//how does thw code get executed in js 

/*
    execution context-usually js runs in 2 phases
    ->global execution context
    ->function or funtional execution context 
    ->eval execution context (this is usually a prop of global ec)
    the 2 phases are 
    -> memory creation phase 
    -> execution phase 
*/

let val1 = 10
let val2 = 5
function addnum(num1,num2)
{
    let tot = num1+num2
    return (tot)
}
let r1 = addnum(val1,val2)
let r2 = addnum(10,50)
console.log(r1)
console.log(r2)

/*
s-1 : global execution or global environmet 
      ->what ever code we wanna run it first gets 
      executed in the global execution and gets located 
      in THIS (keyword)
phase-2: memeory phase 
        -> variable gets gathered and stored
        val1->undefined 
        val2->undefined
        addnum->definition(body of the fun)    
        r1,r2->undefined  
///cycle 2 execution phase 
s3 : val1 <- 10
     val2 <- 5
     it does not worj on funtion but as soon as it comes to the r1 it creates 
     addNum ->  new var env. + execution thread
     for for the created new env snd thread we have to re run execution and memeory phase 
     
     memoryphase.              execution    
     val1->undef               num1-> 10
     val2->undef               num2-> 5
     tot-> undef               tot ->15(it return in global execution context)

     now after performing these 2 phases the the block will get deleted
     and it goes to next line

     r2 -> addnum ->new var env. + execution thread

     memory phase.           execution
     //same as r1.           //same as r1 
                              except the values

 */
/*
call stack
 see video or use chorme->inspect->source->snnipet
 */