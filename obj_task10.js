// let obj={
//     name:"thirumal",
//     batch:"8r"

// };

// let obj1=Object.create(obj)

// // console.log(obj1)

// console.log(obj1__)




//1.Write a function that takes an array of objects as an argument and returns an array of the keys of each object using for...in iteration.
     
 //Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [["a", "b"], ["c", "d"], ["e", "f"]]



function abc(array){

       let arr=[]
      for(var k in array ){


            let x=Object.keys(array[k])

               let y=arr.push(x)
          
      }
      console.log(arr)
}


let array=[{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]

      abc(array)

      //ans:[ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]


  
//2.Write a function that takes an array of objects as an argument and returns an array of the values of each object using for...in iteration.


//Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
//Output: [[1, 2], [3, 4], [5, 6]]




function values(array_1){

       let arr=[]
      for(var k in array_1 ){


            let y=Object.values(array_1[k])

               arr.push(y)
          
      }
      console.log(arr)
}


let array1=[{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]

values(array1)

//ans:[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]






//3.Write a function that takes an array of objects as an argument and returns a new array with only the objects that have a specific property using for...in iteration.


//Input: [{ a: 1 }, { b: 2 }, { a: 3, b: 4}], "a"
//Output: [{ a: 1 }, { a: 3, b: 4 }]


function pqr(array_2){
    let arr=[]
    
    for(var j in array_2 ){

   

           if(array_2[j].hasOwnProperty("a"))

                 arr.push(array_2[j])
       
    }
    console.log(arr)

}

      let array2= [{ a: 1 }, { b: 2 }, { a: 3, b: 4}]

      pqr(array2)

//4.Write a function that takes an array of objects as an argument and returns a new array with the objects sorted by a specific property using for...in iteration.


// Input: [{ a: 2 }, { a: 1 }, { a: 3 }], "a"
// Output: [{ a: 1 }, { a: 2 }, { a: 3 }]



     ip=[{ a: 2 }, { a: 1 }, { a: 3 }]

         
     for(i=0;i<=ip.length-1;i++){

       for(j=0;j<=ip.length-1;j++){

     if(ip[i].a<ip[j].a){
        
    let   temp;

      temp =ip[i].a

   ip[i].a=ip[j].a

      ip[j].a=temp

     }


       }

     }

 console.log(ip)













//5.Write a function that takes an array of objects as an argument and returns a new object with the properties from all the objects in the array using for...in iteration.


//Input: [{ a: 1 }, { b: 2 }, { c: 3 }]
 //Output: { a: 1, b: 2, c: 3 }



let ar=[{ a: 1 }, { b: 2 }, { c: 3 }]


function abc(m){

      
for(var k in m){
   
      Object.assign(m[0],m[k])
     
     
  
}
console.log(m[0])



}

abc(ar)