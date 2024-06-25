//1.concat();

let arr1=[1,2,3,4];
let arr2=[5,6,7]

    let c=arr1.concat(arr2)

    //console.log(arr1)    //it will not modify existing array
   console.log(c)

   //ans:[1, 2, 3, 4, 5, 6, 7]

    //2.flat()

    let arr=[1,2,3,[4,5,[6,7,[8,9]]]]

     k=arr.flat()  //it will do first level of flat

        k=arr.flat(2)  //it will do second level of flat
    // console.log(arr)
    k=arr.flat(3)       //it will do third level of flat\
    k=arr.flat().flat().flat()
    // console.log(k)


     const nestedArray = [1, [2,[3,[4]]]]

           K=nestedArray.flat(2)

          console.log(K)  //[ 1, 2, 3, [ 4 ] ]


//3.splice

let arry = [1, 2, 3, 4, 5]; 

      arry.splice(2,2,"a","b")

      console.log(arry)     //ans:[ 1, 2, 'a', 'b', 5 ]  it will modify existing array



//4.slice


let array = [1, 2, 3, 4, 5]

  //  C=array.slice(1,4)

 // console.log(array)     //it will not modify existing array
   // console.log(C)
     //ans:[ 2, 3, 4 ]



// 5.toSpliced()

const array1 = [1, 2, 3, 4, 5];  //[1, 'a', 'b', 4, 5]
   
    //  const C =array1.toSpliced(1,2,"a","b");

     //  console.log(C)    //  ans:[1, 'a', 'b', 4, 5]


//6.copywithin()

const array2 = [1, 2, 3, 4, 5];
array2.copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]

console.log(array2)

//7.indexOf()

const array3 = [1, 2, 3, 2, 1];
const index = array3.indexOf(2)
   console.log(index)
      //ans:1

//8.lastIndexOf()

const array4 = [1, 2, 3, 2, 1];
const last = array4.lastIndexOf(2);
console.log(last);
  //ans:3


//9.includes()
const array5 = [1, 2, 3, 4, 5];
const hasValue = array5.includes(3); 

  console.log(hasValue)
   //ans:true


//10.Combining Methods



const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];
const mergedArray = array_1.concat(array_2).flat();
const splicedArray = mergedArray.toSpliced(2, 1, 'a');
const finalArray = splicedArray.slice(1, 5);

console.log(finalArray.includes('a'));   //ans:true
console.log(finalArray.indexOf(5));    //ans:3







