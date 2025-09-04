let a={
    name:"Amit",
    lname:"Patel",
    addres:{
        age:21,
        city:"Varansi",
        pin:221011
    }
    
    }


 console.log(Object.keys(a))
let obj2={...a}
let obj1=JSON.parse(JSON.stringify(a))
obj1.addres.city="Mirzapur"
console.log(a)
console.log(obj1)