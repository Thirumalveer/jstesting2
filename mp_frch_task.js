// 1. 1. Given an array of numbers, use the map function to create a new array where each number is doubled.

// Example Output:   
// [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];

    // let x=numbers.map( function double(a){
    //       return a*2
    // })

    let x= numbers.map((a)=> a*2)

    console.log(x)

    //ans:[ 2, 4, 6, 8, 10 ]


    //2.Given an array of names, use the forEach function to print each name in the console.

    // Example Output:   
    // Alice
    // Bob
    // Charlie
    // David



    const names = ['Alice', 'Bob', 'Charlie', 'David'];

          const z= names.forEach((a)=>{ console.log(a)})

//3.Given an array of numbers, use the filter function to create a new array that contains only the even numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    let y=arr.filter((a)=> a%2==0)
    console.log(y)

         

      
    // const add = (val) => {
    //     sub(val + 10, div);
    // };
    // const sub = (val, div) => {
    //     div(val - 5, mul);
    // };
    // const div = (val, mul) => {
    //     mul(val / 2, result);
    // };
    // const mul = (val, result) => {
    //     result(val * 2);
    // };
    // const result = (val) => {
    //     console.log(`The Total Value After So Many Callbacks : ${val}`);
    // };
    // add(100);





//4. Given an array of objects representing students with their names and scores, use the map function to create a new array of strings that says "Name has scored Score".  


const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 88 }
  ];
  
      
          let Z=students.map((a,b)=> a.name+" " +"has scored" +" "+a.score)



          console.log(Z)

    //5. Given an array of objects representing people with their names and ages, use the filter function to create a new array that contains only the people who are 18 or older. 



    const people = [
        { name: 'Alice', age: 17 },
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 15 },
        { name: 'David', age: 22 }
      ];

      
       let emp=people.filter((a)=> a.age>18)

         console.log(emp)




//6. Given an array of strings, use the map function to create a new array where each string is converted to uppercase.


         const words = ['hello', 'world', 'javascript', 'map'];

         let caps=words.map((a)=> a.toUpperCase())
          
          console.log(caps)

          //ans:[ 'HELLO', 'WORLD', 'JAVASCRIPT', 'MAP' ]



//7. Given an array of numbers, use the forEach function to add 1 to each number in the array.


     let nums = [10, 20, 30, 40, 50];

  let empt=[]
         let res=nums.forEach((a)=>{
                     
               empt.push(a+1)

         } )
        
       //  console.log(res)
         console.log(empt)
        
  //ans:[ 11, 21, 31, 41, 51 ]


//8. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters.




const str = ['hi', 'hello', 'hey', 'world', 'js'];

   let res1=str.filter((a,b)=> a.length>3)

    console.log(res1)


//
// Output : 
// ['hello', 'world']












