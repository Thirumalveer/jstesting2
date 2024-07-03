let arr=[1,2,34,5,6,7,9]


  let x=arr.map(()=>{console.log("hiiiiiiiiiii")})

        arr.map((a,b,c)=>{console.log("hiii",a*10,b,c)})



//  1. Create a function greet that takes a name and a callback function. The greet function should call the callback function, passing the name to it. Define a callback function that simply logs "Hello, [name]" to the console.


             
            function greet (name){

                  name();
            }

            function abc(){

              console.log("Hello, [name]")
            }



        greet(abc)


 //2.  Write a function that takes an array of numbers and uses the map function to create a new array where each number is doubled.


         let arr1=[2,3,4,5,6,7,8]

              let y=arr1.map((a)=> a*2)

              console.log(y)

                           
//3. Create a function applyToEach that takes an array and a callback function. The applyToEach function should use the map function to apply the callback to each element of the array and return the new array.

    
   
               
let arr3=[1,2,3,4,5,6,7,8]

function abc(arr){
    
     y=arr.map((a)=>a)
     console.log(y)
}

abc(arr3)
    

  //4. Write a function that takes an array of strings and uses the map function to create a new array where each string is converted to uppercase.
               
              

  let arr2=["thirumal","veer","hyd","hitechcity"]


          let z=arr2.map((a)=> a.toUpperCase())

          console.log(z)

                


