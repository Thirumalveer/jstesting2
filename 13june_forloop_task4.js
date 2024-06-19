if (5 > 10) {
    console.log('5 is greater than 10');
  } else {
    console.log('5 is less than or equal to 10');
  }
  
  //ans:5 is greater than 10
//2. What will be the output of this code:

if (NaN === NaN) {
  console.log('NaN is equal to NaN');
} else {
  console.log('NaN is not equal to NaN');
}

//ans:NaN is equal to NaN


//3. What will be the output of this code:

if (!null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy');
}

//ans:null is truthy

//4. What will be the output of this code:

if (0 === '') {
    console.log('0 is equal to empty string');
  } else {
    console.log('0 is not equal to empty string');
  }

 // ans:0 is not equal to empty string

 
//5. What will be the output of this code:

if (true && false) {
  console.log('true and false is true');
} else {
  console.log('true and false is false');
}
//ans:true and false is false


//6. What will be the output of this code:

if (false || true) {
  console.log('false or true is true');
} else {
  console.log('false or true is false');
}

//ans:false or true is true



//7. What will be the output of this code:
if (!false && true) {
  console.log('not false and true is true');
} else {
  console.log('not false and true is false');
}

//ans:not false and true is true

//8.What will be the output of this code:
if (5 === '5') {
    console.log('5 is equal to string 5');
  } else {
    console.log('5 is not equal to string 5');
  }

  //ans:5 is not equal to string 5

  
//9. What will be the output of this code:

if (undefined == null) {
  console.log('undefined is equal to null');
} else {
  console.log('undefined is not equal to null');
}

//ans:undefined is equal to null

//10.What will be the output of this code:

if (typeof [] === 'object') {
  console.log('Array is an object');
} else {
  console.log('Array is not an object');
}

//ans:Array is an object

//11.What will be the output of this code:

for (var i = 0; i < 5; i++) {
  console.log(i);
}
// ans:0
//     1
//     2
//     3
//     4


//11.What will be the output of this code:

for (var i = 0; i < 5; i += 2) {
  console.log(i);
}

//ans:    0
    //    2
    //    4

//12.What will be the output of this code:

for (var i = 5; i >= 0; i--) {
    console.log(i);
  }

//ans:5
// 4
// 3
// 2
// 1
// 0

//13.What will be the output of this code:

for (var i = 0; i < 5; i += 3) {
    console.log(i);
  }

//ans:0
//    3


//14.What will be the output of this code:

for (var i = 0; i > 5; i++) {
  console.log(i);
}

//ans:condition will become false 


//15. What will be the output of this code:

for (var i = 5; i <= 0; i--) {
    console.log(i);
  }

//ans:condition in forloop is false


//16.What will be the output of this code:

for (var i = 0; i < 10; i += 4) {
    console.log(i);
  }

  //ans: 0
// 4
// 8

//17.What will be the output of this code:

for (var i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

//ans:0
// 1
// 2

//18. What will be the output of this code:

for (var i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);

  }

//ans:0
// 1
// 3
// 4


//19.What will be the output of this code:

for (var i = 0; i < 5; i++) {
    if (i === 1) return;
    console.log(i);
  }

  //ans:0