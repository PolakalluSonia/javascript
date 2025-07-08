//maps 
const myNums = [1,2,3,4,6,7,8,9,10]

newNums=myNums.map((num)=>num+10)
console.log(newNums);

//chaining (using maps filters on a single statement)
const newNums1 = myNums.map((num)=>num*10).map((num)=>num+10)
console.log(newNums1);

//Reduce
const nums1 = [1,2,3]
const tot=nums1.reduce(function(acc,currVal){
    console.log(`acc:${acc} , currval:${currVal}`)
    return acc+currVal

},0)
console.log(tot)
//reduce using arror function 
const nums2 =[1,2,3,4]
const tot1 = nums1.reduce((acc,currVal)=>{
    console.log(`acc:${acc} , currval:${currVal}`)
        return acc+currVal
},1)
console.log(tot1)
//tht tot1 can also be written as num.reduce((acc,curr)=>acc+curr,0)

const shoppingcart = [
    {
        item:"jscourse",
        price:2999
    },
    {
        item:"jaca",
        price:3999
    },
    {
        item:"python",
        price:4999
    },
    {
        item:"mobdev",
        price:9999
    }
]
//write a fun to add all the prices 
const price = shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(price)