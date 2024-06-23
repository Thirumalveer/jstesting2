//find the largest number in an array


let arr=[23,56,13,2,6,77,44]

for(i=0;i<arr.length-1;i++){
  var larger=arr[0]
  if(larger <arr[i] ){

  
    larger =arr[i]

  }

  
}
console.log(larger)

//2. find the smallest number in an array

  
let arr1=[23,56,13,2,6,77,44]

for(i=0;i<arr1.length-1;i++){
  
  if(arr1[0] > arr1[i] ){

  
    arr1[0] =arr1[i]

  }

  
}
console.log(arr1[0])



//3.find the sum of the even numbers in an array



  
let arr2=[23,2,4,10,3,5,7,9]

var sum=0
   
for(i=0;i<=arr2.length-1;i++){
    
  if(arr2[i]%2 ==0 ){
   
    var sum=sum+arr2[i]
    
    
  
  }

}
console.log(sum)


//4.find the odd numbers in an array and push into new array

let arr3=[12,33,1,23,14,15,18]

 let x=[];


 for(i=0;i<=arr3.length-1;i++){

   if(arr3[i]%2==0){

    x.push(arr3[i]);
  }
   }
         
  

  console.log(x)
 

  //5. find the second largest number in an array


        let arr5=[13,2,11,44,6,88,22,77,0,300];

      for(i=0;i<=arr5.length-1;i++){

        for(j=0;j<=arr5.length-1;j++){

          if(arr5[j] >arr5[j+1]){
               
                var temp;

                   temp=arr5[j]
                arr5[j] =arr5[j+1]  

                arr5[j+1] =temp

          }
        }
      }

      console.log(arr5)
      console.log(arr5[arr5.length-2])




      function abc(arr){

        large=arr[0]
      var  seclarge;

        for(i of arr){

          if(i>large){

            seclarge=large
            large=i

          }
        }
        console.log(seclarge)
      }



  let a2=[11,22,,33,33,43,44]

   abc(a2)