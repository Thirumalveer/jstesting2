
//1) Write a program to print the sum of odd digits in the number


num="1633";
sum=0;
for(i of num){

    if(i%2>0)
        sum= sum+Number(i)
}
console.log(sum)

//ans: 7

// num="1633";

// sum=0;
// for(i=0;i<=num.length-1;i++){

//       if(num[i]%2 >0){

//         sum=sum+Number(num[i])

//       }
      
// }
// console.log(sum)


//2) Write a program to print the difference between even sum and odd sum
// num="163382";

    
  sum=0
    sub=0
  for(i=0;i<=num.length-1;i++){

          if(num[i]%2 ==0){

            sum= sum+Number(num[i])

          }
          else{
            sub= sub+Number(num[i])
          }
  }

    console.log( sum - sub)



//3.Write a program to check whether even sum is greater or odd sum is greater.

num="163382"
sum=0;
odd=0
for(i of num){

if(i%2>0){
 odd= odd+Number(i)
}
else{
sum=sum+Number(i)
}
}
if(sum>odd)

console.log(`even sum is greater${sum}`)

else
console.log(" odd sum is greate" + odd)












