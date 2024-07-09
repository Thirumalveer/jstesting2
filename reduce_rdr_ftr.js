//1. Given an array of strings, use the map function to create a new array where each string is converted to uppercase and sort the data


let  arr=["hii","thirumal","veer","hyd","location"]


   let y=arr.map((a)=> a.toUpperCase())
   console.log(y)

   //.2. Given an array of numbers, use the forEach function to add 1 to each number in the array and sort the data in descending


    let arr1=[11,10,2,1,4,7,6]

      var   empt=[]
  let z=arr1.forEach((a)=>{
    
        empt.push(a+1)

  })
        
       empt.sort((a,b)=> a-b)

          console.log(empt)


//3. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters and join the data separated by space using reduce and reduceRight


        let arr2=["Hoo","veer","banana","apple","mango","hii","hyd"]
       
       let marr=arr2.filter(a=> a.length>3)

             let red=marr.reduce((x,y)=> x+" "+y)

              let red1=marr.reduceRight((x,y)=> x+" "+y)

              console.log(red1)
               console.log(red)










     let a=2;

  //console.log(a++,"a++")  nas:2
  // console.log(++a,"++a")     ans:3
   //  console.log(--a,"--a")      ans: 1
//   console.log(a--,"a--")



      






