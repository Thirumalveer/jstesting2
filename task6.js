
//1.print before letters of every charecter by using askey values

str =prompt("enter text here:")

  str=str.toLowerCase();
// str="thirumal"
  
  for(var k of str){
       
    let b=k.charCodeAt()
       

         d=String.fromCharCode(b-1);
         if(d!=="`"){

            console.log(d)
               
         }
         else{
            
            b=d.charCodeAt()
            c=String.fromCharCode(b +26)

           console.log(c)
         }
        }
        
//  ans:s
//      g
//      h
//      q
//      t
//      l
//      z
//      k

// 2.remove spaces between a sentence'

 let a="hello  good motning everyone"

   str =" "
     for(i=0;i<=a.length-1;i++){

          if(a[i] !==" "){

             str=str+a[i]
          }
        //   else{
        //    console.log("space at index"+i)
        // }
     }

     console.log(str)


     //3.reverse a hello word without using methods'

   str="hello word";

   for(i=str.length-1;i>=0;i--){
          console.log(str[i])
   }

//    ans:
//    d
//    r
//    o
//    w
    
//    o
//    l
//    l
//    e
//    h
   