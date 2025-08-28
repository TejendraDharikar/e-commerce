const myNums=[1,2,3];

// const newNums=myNums
//         .map((num)=>
//           num*10)
//         .map((num)=>
//           num+1)
//         .filter((num)=>num>=30)

// const myTotal=myNums.reduce(function(acc,curval){
//   console.log(`acc:${acc} and curval:${curval}` )
//   return acc+curval
// },0)

const myTotal=myNums.reduce((acc,curval)=>
 { console.log(`acc:${acc} and curval:${curval}`);
 return acc+curval},0)

 console.log(myTotal);