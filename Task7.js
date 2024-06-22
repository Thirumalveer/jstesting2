//1.find the length of a string without using method.

 let str="thirumal";

 for(var k in str){

     var j=Number(k);
    
   
 }
 console.log(j+1)


//  ans:8

 //2.iterabe object values through for in loop

     let obj={

                name:"thirumal",
                age:10,
                gender:"Male",
                city:"hitech-city",
                plot_no:4-81,
                lane:12,
                state:"Telangana",
                pincode:500081
           
     }

     //console.log(obj.name)
       for(var j in obj){

      console.log(obj[j])
       }


    //    ans:thirumal
    //    10
    //    Male
    //    hitech-city
    //    4-81
    //    12
    //    Telangana
    //    500081
// 3) iterabe object keys  through for in loop


let obj1={

    name:"thirumal",
    age:10,
    gender:"Male",
    city:"hitech-city",
    plot_no:4-81,
    lane:12,
    state:"Telangana",
    pincode:500081

}
for(var k in obj1){

  console.log(k)
}

// ans:name
// age
// gender
// city
// plot_no
// lane
// state
// pincode


// 4)iterate object values and keys using entries , keys and values methods

 // object entrries - keys and values
    // object keys - keys and values
    // /object values - we can get only values

    
    let obj2={

    name:"thirumal",
    age:10,
    gender:"Male",
    city:"hitech-city",
    plot_no:4-81,
    lane:12,
    state:"Telangana",
    pincode:500081

}
     //console.log(obj2)
     for(var [key, value] of Object.entries(obj2) ){
       
        console.log(`${key}:${value}`)

     }
   

let ent=Object.entries(obj2)       
   let val=Object.values(obj2)
   let keys=Object.keys(obj2)
   console.log(ent)          
  console.log(val)
   console.log(keys)

   
//    ans:
//    name:thirumal
//    age:10
//    gender:Male
//    city:hitech-city
//    plot_no:-77
//    lane:12
//    state:Telangana
//    pincode:500081


/*[
    [ 'name', 'thirumal' ],
    [ 'age', 10 ],
    [ 'gender', 'Male' ],
    [ 'city', 'hitech-city' ],
    [ 'plot_no', -77 ],
    [ 'lane', 12 ],
    [ 'state', 'Telangana' ],
    [ 'pincode', 500081 ]
]*/

/*[ 'thirumal', 10, 'Male', 'hitech-city', -77, 12, 'Telangana', 500081 ]*/


/*[
  'name',    'age',
  'gender',  'city',
  'plot_no', 'lane',
  'state',   'pincode'
]
*/

