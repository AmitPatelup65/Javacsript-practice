let a={
    name:"Amit",
    lname:"Patel",
    addres:{
        city:"Varansi"
    }
    
    }

// let {age,roll}=a.detail
//  console.log(a.name,a.lname)
//  console.log(a.detail.age,a.detail.roll)
//  console.log(age,roll)
//  for(let key in a){
//     console.log(key,a[key])
//  }
//  console.log(Object.keys(a))
// let obj1={...a}
let obj1=JSON.parse(JSON.stringify(a))
obj1.addres.city="Mirzapur"
console.log(a)
console.log(obj1)