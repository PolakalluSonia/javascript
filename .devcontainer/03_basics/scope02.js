//scope - nested scope and closure 

function one()
{
    const username = "Sonia"
    function two ()
    {
        const web =  "Youtube"
        console.log(username)
    }
    two()
}
console.log(one())

function addone(num)
{
    return num +1
}
console.log(addone(5))
console.log(typeof(addone(5)))

const addtwo = function(num)
{
    return num+2
}
console.log(addtwo(8))
console.log(typeof(addtwo(8)))




