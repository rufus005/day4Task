let details1 = {name:"Rufus",email:"rufus@gmail.com",mobile:"6369699399",age:"22",gender:"male"}
let details2 = {name:"Rufus",email:"rufus@gmail.com",mobile:"6369699399",age:"22",gender:"male"}

// let flag = true
// for(let e in details1)
// {
//     if(details1[e]!==details2[e])
//     {
//         flag = false;
        
//     }
// }

// flag?console.log("Equal"):console.log("Not Equal")


let keys = Object.keys(details1)
console.log(keys)

let flag = true
for (let e of keys)
{
    if(details1[e]!==details2[e])
    {
        flag=false
        break;
        
    }
    }
    flag?console.log("Equal"):console.log("Not Equal")


// let keys1 = Object.keys(details1)
// let keys2 = Object.keys(details2)
// let flag = true
// if(keys1.length===keys2.length)
// {

// for(let e of keys) 
// {
//       if(details1[e]!==details2[e])
//     {
//         flag=false
//         break;
        
//       }
//     }
//   }
//   else
//   flag = false
//       flag?console.log("Equal"):console.log("Not Equal")

// <<<<<<< output  >>>>>
equal