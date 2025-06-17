//this and arrow 
/*
 */

const user = 
{
    username : "sonia",
    age : 19,
    welcome : function ()
    {
        console.log(`Hellooo ${this.username}`)
    }
}
user.welcome()
user.username = "polakallu"
user.welcome()

const one = function ()
{
    let us = "sonia"
    console.log(this.us) // o/p -> undefined
}
one()

////ARROW FUNCTION 
const two = () => {
    let u = "Polakallu "
    console.log(this.us) // o/p -> undhifined 
}
two()

// arrow function can also be written in this way 

// way 1 (normal way ) explicit return
const addtwo =  (num1,num2)=>{
    return num1+num2
}
console.log("og",addtwo(1,2))

//way two aka implicit return 

const addtwo1 = (num1,num2) => num1+num2
console.log("implicit",addtwo1(10,20))

//way 3 of doing implicit 

const addtwo2 = (num1,num2) => num1+num2
console.log("implicit2",addtwo2(100,200))

/* when CURVY braces are used we 
must return a value 
when NORMAL then no need to */

//to return an obj using arrow implict 

const us = (username) => ({username:"sonia",
    age : "02"
})
console.log(us())


