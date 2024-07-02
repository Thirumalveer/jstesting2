//1)  check how isNaN works in different scenario
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true


isNaN(true); // false
isNaN(false);//false
isNaN(null); // false
isNaN(37); // false


// Strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC","jhkhk"); // true: Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN


// Dates
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number




// Arrays
isNaN([]); // false; the primitive representation is "", which coverts to the number 0
isNaN([1]); // false; the primitive representation is "1"
isNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number


//2) study types of coercion

//Type Coercion
// Type coercion refers to the automatic or implicit conversion of values from one data type to another. This process happens in the background during operations involving values of different types.

// Types of Type Coercion
// Implicit Coercion: This occurs automatically when JavaScript encounters an operation involving different data types.
// Explicit Coercion: This is when you manually convert a value from one type to another using functions or methods.

// Explicit Type Conversion
// JavaScript type conversion, allowing you to convert values from one data type to another.
// String(): Converts a value to a string.
// let num = 123; let str = String(num); console.log(str); // Output: "123" 
// Number(): Converts a value to a number.
// let str = "123"; let num = Number(str); console.log(num); // Output: 123  
// 3. Boolean(): Converts a value to a boolean.
// let num = 0; let bool = Boolean(num); console.log(bool); // Output: false

  
//3) write a program to print a random otp

        

    function abc(){
    let digits = '0123456789';
    let len=digits.length
     let otp= ""
           for(i=0;i<4;i++){

             otp +=digits[Math.floor(Math.random()*len)]


           }
       
            return otp
        
    }
    console.log(abc())

    