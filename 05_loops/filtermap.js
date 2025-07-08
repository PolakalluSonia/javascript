//filter and redue
/*
forEach loop return nthg (undefined)
so to avoid this we use Filter
is mostly used to return smthg that is true 
 */
const coding = ["Js","java","pyhton"];
const code=coding.forEach ((item)=>{
      console.log(item);
      return item;
})
console.log(code)
//Filter Operation -> returns values
 const num = [1,2,3,4,5,6,7,8,9,10]
 const nums = num.filter((num)=>num>4) //since it's a arrow fun and we are
                                       // not using any '{}' no need to return
                                       // if we are using '{}' we have to return 
 console.log(nums)

const num1 = num.filter((item)=>{
    return item < 3;
})
console.log(num1)

 num.filter((item)=>{
    if (item >=8)
    {
        console.log(item);
    }

 })
 
 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk)=> bk.genre === "History")
  console.log((userBooks));
  const booksPublish =  books.filter((bk)=>bk.publish > 2000 && bk.genre==="History");
  console.log(booksPublish)